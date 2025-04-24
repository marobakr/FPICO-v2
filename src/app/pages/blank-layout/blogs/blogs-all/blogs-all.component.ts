import { AsyncPipe, SlicePipe } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerService } from "ngx-spinner";
import { timer } from "rxjs";
import { IAllBlogs } from "../../../../core/interfaces/IAllBlogs";
import { BlogsService } from "../../../../core/services/blogs/blogs.service";
import { OurServicesContentService } from "../../../../core/services/our-services-content.service";
import { LanguageService } from "../../../../core/services/services/language.service";
import { PagesHeaderComponent } from "../../../../shared/components/pages-header/pages-header.component";

@Component({
  selector: "app-blogs-all",
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    PagesHeaderComponent,
    NgxPaginationModule,
    AsyncPipe,
    SlicePipe,
    TranslateModule,
  ],
  templateUrl: "./blogs-all.component.html",
  styleUrl: "./blogs-all.component.scss",
})
export class BlogsAllComponent {
  servicesContent: OurServicesContentService = inject(OurServicesContentService);

  _TranslateService: TranslateService = inject(TranslateService);

  _NgxSpinnerService = inject(NgxSpinnerService);

  isRTL: boolean = false;

  allBlogsData!: IAllBlogs;

  blogsService = inject(BlogsService);

  currentPage = 1;

  totalItems = 0;

  languageService = inject(LanguageService);

  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === "ar") {
        this.isRTL = true;
      } else {
        this.isRTL = false;
      }
    });
    if (this._TranslateService.currentLang === "ar") {
      this.isRTL = true;
    } else {
      this.isRTL = false;
    }
    this.getAllBlogsData();
  }

  imageLoaded(img: HTMLDivElement): void {
    img.nextElementSibling?.remove();
  }

  getAllBlogsData(): void {
    this.blogsService.getAllBlogs().subscribe({
      next: (response) => {
        this.allBlogsData = response;
        this.totalItems = response.rows.total;
      },
    });
  }

  pageChanged(page: number): void {
    this._NgxSpinnerService.show();
    this.currentPage = page;
    this.blogsService.getAllBlogs(this.currentPage).subscribe({
      next: (response) => {
        this.allBlogsData = response;
        window.scrollTo(0, 0);
        timer(300).subscribe(() => this._NgxSpinnerService.hide());
      },
    });
  }
  isDesktop = false;
  @HostListener("window:resize", ["$event"])
  onResize() {
    this.isDesktop = window.innerWidth > 992;
  }
}
