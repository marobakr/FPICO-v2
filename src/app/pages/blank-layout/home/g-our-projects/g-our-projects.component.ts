import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../../../core/interfaces/IHomeData';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';
import { LanguageService } from '../../../../core/services/services/language.service';

@Component({
  selector: 'app-g-our-projects',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe, RouterLink, AsyncPipe],
  templateUrl: './g-our-projects.component.html',
  styleUrl: './g-our-projects.component.css',
})
export class GOurProjectsComponent {
  isRTL = input(false);
  Project = input.required<Project[]>();

  languageService = inject(LanguageService);
}
