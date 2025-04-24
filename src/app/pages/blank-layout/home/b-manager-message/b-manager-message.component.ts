import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ChairMessage } from "../../../../core/interfaces/IHomeData";

@Component({
  selector: "app-b-manager-message",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./b-manager-message.component.html",
  styleUrl: "./b-manager-message.component.scss",
})
export class BManagerMessageComponent {
  isRTL = input(false);
  ChairMessage = input.required<ChairMessage>();
}
