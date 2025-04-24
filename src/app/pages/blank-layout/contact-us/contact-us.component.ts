import { Component, inject } from "@angular/core";
import { ContactUsFormComponent } from "./contact-us-form/contact-us-form.component";
import { TranslateModule } from "@ngx-translate/core";
import { ContactUsMapComponent } from "./contact-us-map/contact-us-map.component";
import { RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { LanguageService } from "../../../core/services/services/language.service";

@Component({
  selector: "app-contact-us",
  standalone: true,
  imports: [ContactUsFormComponent, TranslateModule, ContactUsMapComponent, RouterLink, AsyncPipe],
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.scss",
})
export class ContactUsComponent {
  languageService = inject(LanguageService);
}
