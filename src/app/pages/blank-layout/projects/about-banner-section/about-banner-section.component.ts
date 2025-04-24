import { Component, Input, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IProjects } from '../../../../core/interfaces/IProjectsData';
import { Feature } from '../../../../core/interfaces/IAboutData';

@Component({
  selector: 'app-about-banner-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-banner-section.component.html',
  styleUrl: './about-banner-section.component.scss',
})
export class AboutBannerSectionComponent {
  @Input() features!: Feature[];
  @Input() isRTL!: boolean;

  ngOnChanges(changes: SimpleChanges): void {}

  ourProjectsBannerData = [
    {
      icon: '/images/projects/page/1.png',
      title: 'Pages.projects.slides.about_title_01',
      text: 'Pages.projects.slides.about01',
    },
    {
      icon: '/images/projects/page/2.png',
      title: 'Pages.projects.slides.about_title_02',
      text: 'Pages.projects.slides.about02',
    },
    {
      icon: '/images/projects/page/3.png',
      title: 'Pages.projects.slides.about_title_03',
      text: 'Pages.projects.slides.about03',
    },
    {
      icon: '/images/projects/page/4.png',
      title: 'Pages.projects.slides.about_title_04',
      text: 'Pages.projects.slides.about04',
    },
  ];
}
