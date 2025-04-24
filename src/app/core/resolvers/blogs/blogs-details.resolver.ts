import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { BlogsService } from "../../services/blogs/blogs.service";
import { IGetBlogById } from "../../interfaces/IGetBlogById";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize, timer } from "rxjs";

export const blogsDetailsResolver: ResolveFn<boolean | IGetBlogById> = (route, state) => {
  const blogsService = inject(BlogsService);
  const ngxSpinnerService = inject(NgxSpinnerService);
  ngxSpinnerService.show();

  return blogsService.getBlogById(route.paramMap.get("id")!).pipe(
    finalize(() => {
      timer(300).subscribe(() => ngxSpinnerService.hide());
    })
  );
};
