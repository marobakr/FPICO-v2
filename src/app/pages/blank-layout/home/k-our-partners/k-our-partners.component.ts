import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Partner } from '../../../../core/interfaces/IHomeData';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-k-our-partners',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './k-our-partners.component.html',
  styleUrl: './k-our-partners.component.css',
})
export class KOurPartnersComponent {
  isRTL = input(false);
  Partner = input.required<Partner[]>();
  isAddBackgroundColor = input<boolean>(false);
}
