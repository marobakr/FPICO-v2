import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { IProjects } from "../../../core/interfaces/IProjectsData";
import { SafeHtmlPipe } from "../../../core/pipes/safe-html.pipe";
import { ProjectsService } from "../../../core/services/projects.service";
import { ProjectsDataService } from "../../../core/services/projects/projects-data.service";
import { PagesHeaderComponent } from "../../../shared/components/pages-header/pages-header.component";
import { ContactUsMapComponent } from "../contact-us/contact-us-map/contact-us-map.component";
import { HDownloadPdfSectionComponent } from "../home/h-download-pdf-section/h-download-pdf-section.component";
import { AboutBannerSectionComponent } from "./about-banner-section/about-banner-section.component";
import { AsyncPipe } from "@angular/common";
import { LanguageService } from "../../../core/services/services/language.service";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    HDownloadPdfSectionComponent,
    SafeHtmlPipe,
    ContactUsMapComponent,
    PagesHeaderComponent,
    AboutBannerSectionComponent,
    AsyncPipe,
  ],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  allProjects: ProjectsService = inject(ProjectsService);
  languageService = inject(LanguageService);
  projectsDataService = inject(ProjectsDataService);
  _TranslateService = inject(TranslateService);

  isRTL: boolean = false;

  Subscription!: Subscription;

  ngOnInit(): void {
    this.Subscription = this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === "ar" || this._TranslateService.currentLang === "ar") {
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
    this.getProjectsData();
  }

  allProjectsData!: IProjects;

  getProjectsData(): void {
    this.projectsDataService.getProjectData().subscribe({
      next: (response) => {
        this.allProjectsData = response;
      },
    });
  }
}
