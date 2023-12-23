import { Observable } from "rxjs";
import { CanDeactivateFn }from '@angular/router';
import { Injectable,inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuardService implements CanComponentDeactivate {
  constructor(private authService: AuthService, private router: Router) { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  };
}

export const canDeactivateChildFn:CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
  return component.canDeactivate();
};
