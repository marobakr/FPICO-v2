import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Client } from "../../../../core/interfaces/IAboutData";
import { SafeHtmlPipe } from "../../../../core/pipes/safe-html.pipe";

@Component({
  selector: "app-f-our-clients",
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: "./f-our-clients.component.html",
  styleUrl: "./f-our-clients.component.scss",
})
export class FOurClientsComponent {
  isRTL = input(false);
  Client = input.required<Client[]>();
}
