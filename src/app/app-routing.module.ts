import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { canActivateChildFn } from "./auth-guard.service";
import { canDeactivateChildFn } from "./deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { serverResolverFn } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    //canActivate: [canActivateFn],
    canActivateChild: [canActivateChildFn],
    component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: serverResolverFn } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateChildFn] },
    ]
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Seite nicht gefundem!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
}
