import { CommonModule } from "@angular/common";
import { Component, inject, Inject, PLATFORM_ID } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { CountryISO, NgxIntlTelInputModule, PhoneNumberFormat, SearchCountryField } from "ngx-intl-tel-input";
import { OurServicesContentService } from "../../../../core/services/our-services-content.service";
import { ContactUsService } from "../../../../core/services/contact-us/contact-us.service";
import { IServices } from "../../../../core/interfaces/IServicesData";

@Component({
  selector: "app-contact-us-form",
  standalone: true,
  imports: [NgxIntlTelInputModule, ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: "./contact-us-form.component.html",
  styleUrl: "./contact-us-form.component.scss",
})
export class ContactUsFormComponent {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  startValidation: boolean = false;
  PhoneNumberFormat = PhoneNumberFormat;
  isRTL: boolean = false;
  successMessage: boolean = false;

  _Router = inject(Router);
  _PLATFORM_ID = inject(PLATFORM_ID);
  _TranslateService = inject(TranslateService);
  _OurServicesContentService = inject(OurServicesContentService);
  contactUsService = inject(ContactUsService);

  messagesForm: FormGroup = new FormGroup({
    full_name: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/), Validators.minLength(3)]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/),
    ]),
    service_id: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required, Validators.minLength(10)]),
  });

  allServices!: IServices;

  getAllServices(): void {
    this.contactUsService.getAllServices().subscribe({
      next: (response) => {
        this.allServices = response;
      },
    });
  }

  onSubmit(): void {
    this.successMessage = false;
    this.startValidation = true;
    const USER_DATA = {
      ...this.messagesForm.value,
      phone: this.messagesForm.value["phone"].e164Number,
    };
    if (this.messagesForm.valid) {
      this.contactUsService.sendUserData(USER_DATA).subscribe({
        next: (response) => {
          this.messagesForm.reset();
          this.successMessage = true;
          this.messagesForm.get("service_id")?.setValue("");
        },
        error: (error) => {},
      });
      this.messagesForm.reset();
      this.startValidation = false;
    } else {
    }
  }

  get phoneInputStyles() {
    return {
      height: "100%",
      padding: "1rem",
      "text-align": this.isRTL ? "right" : "left",
      border: this.startValidation && this.messagesForm.get("phone")?.errors ? "1px solid red" : "1px solid #ccc",
    };
  }
  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === "ar") {
        this.isRTL = true;
      } else {
        this.isRTL = false;
      }
    });
    if (this._TranslateService.currentLang == "ar") {
      this.isRTL = true;
    } else {
      this.isRTL = false;
    }
    this.getAllServices();
  }
}
