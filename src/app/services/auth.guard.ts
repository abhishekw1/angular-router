import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { map } from "rxjs/operators";

export const AuthGuardFn: CanActivateFn | CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  const authService = inject(AuthStore),
    router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl("/login")))
  );
};
