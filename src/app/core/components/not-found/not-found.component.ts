import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/services/language.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  languageService = inject(LanguageService);
}
