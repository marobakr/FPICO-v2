import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Client } from '../../../../core/interfaces/IAboutData';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-f-our-clients',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe, NgOptimizedImage],
  templateUrl: './f-our-clients.component.html',
  styleUrl: './f-our-clients.component.css',
})
export class FOurClientsComponent {
  isRTL = input(false);
  Client = input.required<Client[]>();

  breakpointObserver = inject(BreakpointObserver);
  imageSize = signal(96); // Default size for mobile

  constructor() {
    // Subscribe to breakpoint changes
    this.breakpointObserver
      .observe([
        Breakpoints.XLarge,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
      ])
      .subscribe((result) => {
        if (
          result.breakpoints[Breakpoints.XLarge] ||
          result.breakpoints[Breakpoints.Large]
        ) {
          this.imageSize.set(144); // Larger size for desktop
        } else {
          this.imageSize.set(96); // Smaller size for mobile/tablet
        }
      });
  }
}
