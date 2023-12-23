import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Server, ServersService } from "../servers.service";

export const serverResolverFn: ResolveFn<Server> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server => {
  return  new Promise((resolve, reject) => {
    resolve(inject(ServersService).getServer(+route.params['id']));
  });
};
