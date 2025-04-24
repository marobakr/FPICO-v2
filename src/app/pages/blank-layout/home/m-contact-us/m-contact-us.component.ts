import { Component, inject } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SafeHtmlPipe } from "../../../../core/pipes/safe-html.pipe";
import { RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { LanguageService } from "../../../../core/services/services/language.service";

@Component({
  selector: "app-m-contact-us",
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe, AsyncPipe, RouterLink],
  templateUrl: "./m-contact-us.component.html",
  styleUrl: "./m-contact-us.component.scss",
})
export class MContactUsComponent {
  languageService = inject(LanguageService);
}
