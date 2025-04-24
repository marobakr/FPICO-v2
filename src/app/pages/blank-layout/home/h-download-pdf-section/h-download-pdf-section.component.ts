import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-h-download-pdf-section',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './h-download-pdf-section.component.html',
  styleUrl: './h-download-pdf-section.component.scss',
})
export class HDownloadPdfSectionComponent {}
