import { Routes } from "@angular/router";
import { blogsDetailsResolver } from "./core/resolvers/blogs/blogs-details.resolver";
import { BlankLayoutComponent } from "./pages/blank-layout/blank-layout.component";
import { HomeComponent } from "./pages/blank-layout/home/home.component";

export const routes: Routes = [
  // Redirect root to default language ('en')
  { path: "", redirectTo: "/ar", pathMatch: "full" },
  { path: "en/blogs", redirectTo: "/ar/blogs", pathMatch: "full" },
  { path: "en/blogs/:id", redirectTo: "/ar/blogs/:id", pathMatch: "prefix" },
  {
    path: ":lang",
    component: BlankLayoutComponent,
    children: [
      // home
      {
        path: "",
        component: HomeComponent,
        data: {
          title: "home.title",
          description: "home.title-desc",
        },
      },
      // projects
      {
        path: "projects",
        loadComponent: () =>
          import("./pages/blank-layout/projects/projects.component").then((m) => m.ProjectsComponent),
        data: {
          title: "projects.title",
          description: "projects.title-desc",
        },
      },
      // projects-details
      {
        path: "projects-details/:id",
        loadComponent: () =>
          import("./pages/blank-layout/project-details/project-details.component").then(
            (m) => m.ProjectDetailsComponent
          ),
      },
      // services
      {
        path: "services",
        loadComponent: () =>
          import("./pages/blank-layout/services/services.component").then((m) => m.ServicesComponent),
        data: {
          title: "FPICO - SERVICES",
          description: "services.title-desc",
        },
      },
      // services-details
      {
        path: "services-details/:id",
        loadComponent: () =>
          import("./pages/blank-layout/services-details/services-details.component").then(
            (m) => m.ServicesDetailsComponent
          ),
      },
      // about-us
      {
        path: "about-us",
        loadComponent: () => import("./pages/blank-layout/about-us/about-us.component").then((m) => m.AboutUsComponent),
        data: {
          title: "about-us.title",
          description: "about-us.title-desc",
        },
      },
      // contact-us
      {
        path: "contact-us",
        loadComponent: () =>
          import("./pages/blank-layout/contact-us/contact-us.component").then((m) => m.ContactUsComponent),
        data: {
          title: "contact-us.title",
          description: "contact-us.title-desc",
        },
      },
      // blogs
      {
        path: "blogs",
        loadComponent: () => import("./pages/blank-layout/blogs/blogs.component").then((m) => m.BlogsComponent),
        children: [
          {
            path: "",
            loadComponent: () =>
              import("./pages/blank-layout/blogs/blogs-all/blogs-all.component").then((m) => m.BlogsAllComponent),
            data: { title: "contact-us.blogs", description: "contact-us.blogs-desc" },
          },
          {
            path: "blogs-details/:id",
            loadComponent: () =>
              import("./pages/blank-layout/blogs/blogs-details/blogs-details.component").then(
                (m) => m.BlogsDetailsComponent
              ),
            resolve: { blogDetails: blogsDetailsResolver },
            data: { title: "contact-us.blogs", description: "contact-us.blogs-desc" },
            runGuardsAndResolvers: "paramsChange",
          },
        ],
        // canActivate: [onlyArabicGuard], // Prevents access unless "ar"
      },
      {
        path: "blogs/:id",
        loadComponent: () =>
          import("./pages/blank-layout/blogs/blogs-details/blogs-details.component").then(
            (m) => m.BlogsDetailsComponent
          ),
        resolve: { blogDetails: blogsDetailsResolver },
        data: { title: "contact-us.blogs", description: "contact-us.blogs-desc" },
        runGuardsAndResolvers: "paramsChange",
      },
      // not-found
      {
        path: "**",
        loadComponent: () => import("./core/components/not-found/not-found.component").then((m) => m.NotFoundComponent),
        data: {
          title: "page-not.found",
          description: "page-not.found-desc",
        },
      },
    ],
  },
];
