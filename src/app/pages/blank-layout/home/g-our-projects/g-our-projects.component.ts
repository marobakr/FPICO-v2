import { Component, inject, input, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { Project } from "../../../../core/interfaces/IHomeData";
import { SafeHtmlPipe } from "../../../../core/pipes/safe-html.pipe";
import { AsyncPipe } from "@angular/common";
import { LanguageService } from "../../../../core/services/services/language.service";

@Component({
  selector: "app-g-our-projects",
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe, RouterLink, AsyncPipe],
  templateUrl: "./g-our-projects.component.html",
  styleUrl: "./g-our-projects.component.scss",
})
export class GOurProjectsComponent {
  isRTL = input(false);
  Project = input.required<Project[]>();

  languageService = inject(LanguageService);
  homeProjects = [
    {
      project_id: 2,
      project_name: "Pages.projects.slides.text02",
      project_Image: "/images/projects/all_projects/2.png",
    },
    {
      project_id: 5,
      project_name: "Pages.projects.slides.text05",
      project_Image: "/images/projects/all_projects/5.png",
    },
    {
      project_id: 3,
      project_name: "Pages.projects.slides.text03",
      project_Image: "/images/projects/all_projects/3.png",
    },
    {
      project_id: 6,
      project_name: "Pages.projects.slides.text06",
      project_Image: "/images/projects/all_projects/6.png",
    },
    {
      project_id: 2,
      project_name: "Pages.projects.slides.text02",
      project_Image: "/images/projects/all_projects/2.png",
    },
    {
      project_id: 4,
      project_name: "Pages.projects.slides.text04",
      project_Image: "/images/projects/all_projects/4.png",
    },
  ];
}
