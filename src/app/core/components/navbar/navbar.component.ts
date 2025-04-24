import { AsyncPipe, NgOptimizedImage } from "@angular/common";
import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SocialMediaLinksComponent } from "../../../shared/components/social-media-links/social-media-links.component";
import { LanguageService } from "../../services/services/language.service";
import { NavbarLanguageComponent } from "./navbar-language/navbar-language.component";
import { NavbarRoutingComponent } from "./navbar-routing/navbar-routing.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    NavbarRoutingComponent,
    NavbarLanguageComponent,
    SocialMediaLinksComponent,
    RouterLink,
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  languageService = inject(LanguageService);
  cdr = inject(ChangeDetectorRef);
  ngOnInit(): void {
    this.cdr.detectChanges(); // ✅ Force change detection
  }
}
