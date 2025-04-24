import { isPlatformBrowser } from "@angular/common";
import { HttpInterceptorFn } from "@angular/common/http";
import { ApplicationRef, inject, PLATFORM_ID } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize, first, timer } from "rxjs";

// Flag to track if it's the first reload
let isFirstLoad = true;

export const loadingSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes("getServices")) return next(req);
  if (req.url.includes("getContact")) return next(req);
  if (req.url.includes("ar.json")) return next(req);
  if (req.url.includes("en.json")) return next(req);

  const spinner = inject(NgxSpinnerService);
  const appRef = inject(ApplicationRef);
  const pLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(pLATFORM_ID)) {
    document.body.style.overflow = "hidden";
  }

  spinner.show();
  return next(req).pipe(
    finalize(() => {
      // appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
      //   // if (isPlatformBrowser(pLATFORM_ID)) {
      //   //   if (isPlatformBrowser(pLATFORM_ID)) {
      //   //     document.body.style.overflow = "auto";
      //   //   }
      //   // }

      //   spinner.hide();
      // });

      timer(500).subscribe(() => {
        spinner.hide();
        if (isPlatformBrowser(pLATFORM_ID)) {
          document.body.style.overflow = "auto";
        }
      });
    })
  );
};
