import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withInMemoryScrolling, withViewTransitions } from "@angular/router";
import { provideSpinnerConfig } from "ngx-spinner";
import { routes } from "./app.routes";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from "ngx-toastr";
import { IMAGE_CONFIG } from "@angular/common";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { cacheInterceptor } from "./core/interceptors/cache.interceptor";
import { loadingSpinnerInterceptor } from "./core/interceptors/loading-data.interceptor";
import { retryInterceptor } from "./core/interceptors/retry.interceptor";
import { TranslateModule } from "@ngx-translate/core";
import { provideTranslation } from "./core/config/i18n/translate-loader.config";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" }), withViewTransitions()),
    provideSpinnerConfig({ type: "ball-scale-multiple" }),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideToastr({
      positionClass: "toast-top-left",
      timeOut: 2000,
      preventDuplicates: true,
    }),
    provideHttpClient(withFetch(), withInterceptors([cacheInterceptor, loadingSpinnerInterceptor, retryInterceptor])),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
};
