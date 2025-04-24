import { Component, HostListener, inject, OnDestroy, OnInit, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Meta, Title } from "@angular/platform-browser";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { filter, map, Subscription } from "rxjs";
import { FooterComponent } from "./core/components/footer/footer.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { isPlatformBrowser } from "@angular/common";
import { FlowbiteService } from "./core/services/core/flowbite.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TranslateModule, FormsModule, NavbarComponent, FooterComponent, NgxSpinnerModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private langSubscription!: Subscription;
  private routerSubscription!: Subscription;

  private router = inject(Router);
  private titleService = inject(Title);
  private meta = inject(Meta);
  private spinner = inject(NgxSpinnerService);
  private translate = inject(TranslateService);
  private _PLATFORM_ID = inject(PLATFORM_ID);
  private flowbiteService = inject(FlowbiteService);

  constructor() {
    this.translate.addLangs(["ar", "en"]);
    this.translate.setDefaultLang("ar");
    this.translate.use("ar");
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.default?.initFlowbite();
    });

    this.spinner.show();

    // Initialize meta title/description on first load
    this.updateMetaTags();

    // Subscribe to language changes
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.updateMetaTags();
    });

    // Subscribe to route changes
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.router.routerState.root;
          while (child.firstChild) {
            child = child.firstChild;
          }
          return child.snapshot.data;
        })
      )
      .subscribe((data) => {
        this.setMetaTags(data);
      });
  }

  // @HostListener("window:load")
  // onWindowLoad() {
  //   timer(100).subscribe(() => this.spinner.hide());
  // }

  private updateMetaTags() {
    const currentRoute = this.router.routerState.snapshot.root;
    let child = currentRoute;
    while (child.firstChild) {
      child = child.firstChild;
    }
    this.setMetaTags(child.data);
  }

  private setMetaTags(data: any) {
    if (data["title"]) {
      this.translate.get(data["title"]).subscribe((translatedTitle) => {
        this.titleService.setTitle(translatedTitle);
      });
    }
    if (data["description"]) {
      this.translate.get(data["description"]).subscribe((translatedDesc) => {
        this.meta.updateTag({
          name: "description",
          content: translatedDesc,
        });
      });
    }
    const currentLang = this.translate.currentLang;

    // Add meta keywords only if Arabic
    if (currentLang === "ar") {
      this.meta.updateTag({
        name: "keywords",
        content: "فيبكو خدمات المقاولات",
      });
    } else {
      this.meta.removeTag("name='keywords'"); // Remove if not Arabic
    }

    const currentPath = this.router.url; // e.g., "/ar/projects" or "/en/about"
    const withoutLangPrefix = currentPath.replace(/^\/(ar|en)/, ""); // → "/projects"
    const cleanSlug = withoutLangPrefix === "/" ? "" : withoutLangPrefix;

    // Update Canonical (based on current language)
    const canonicalUrl = `https://fpico.org/${currentLang}${cleanSlug}`;
    this.updateCanonicalUrl(canonicalUrl);

    // Update Alternate Links (always add both)
    this.updateAlternateLinks(
      cleanSlug, // Arabic Slug
      cleanSlug // English Slug
    );
  }

  /**
   * Updates canonical URL.
   */
  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      const canonicalSelector = 'link[rel="canonical"]';
      let existingCanonical = document.querySelector(canonicalSelector) as HTMLLinkElement;

      if (existingCanonical) {
        existingCanonical.href = url;
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = url;
        document.head.appendChild(link);
      }
    }
  }

  /**
   * Dynamically updates alternate language links.
   */
  private updateAlternateLinks(arSlug: string, enSlug: string): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      const existingAlts = document.querySelectorAll('link[rel="alternate"]');
      existingAlts.forEach((link) => link.remove());

      const langs = [
        { code: "ar", slug: arSlug },
        { code: "en", slug: enSlug },
      ];

      langs.forEach(({ code, slug }) => {
        const url = `https://fpico.org/${code}${slug}`;
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", code);
        link.setAttribute("href", url);
        document.head.appendChild(link);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Prevent right click
  @HostListener("document:contextmenu", ["$event"])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
  }

  // Prevent drag on images
  @HostListener("dragstart", ["$event"])
  onDragStart(event: DragEvent): void {
    event.preventDefault();
  }
}
