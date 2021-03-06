import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { StatusModule } from './status/status.module';
import { DocsModule } from './docs/docs.module';
import { LandingModule } from './landing/landing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './status/not-found/not-found.component';

@NgModule(Framing((framing) => framing
  .imports([
    StatusModule,
  ])
  .root(AppComponent)
  .routes([
    { path: '', pathMatch: 'full', loadChildren: () => LandingModule },
    { path: 'docs', loadChildren: () => DocsModule },
    { path: 'api', loadChildren: () => DocsModule },
    { path: 'features', loadChildren: () => DocsModule },
    { path: 'quickstart', loadChildren: () => DocsModule },
    { path: 'framing', loadChildren: () => DocsModule },
    { path: 'tasknas', loadChildren: () => DocsModule },
    { path: '**', component: NotFoundComponent },
  ],
  {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
    },
  }),
))
export class AppModule {}
