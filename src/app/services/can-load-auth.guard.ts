import { inject } from "@angular/core";
import {
  CanMatchFn,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";
import { Observable } from "rxjs";

// canLoad is depcrated now we need to use CanMatchFn
export const CanMatchAuthGuardFn: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  return inject(AuthStore).isLoggedIn$.pipe(
    first(),
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigateByUrl("/login");
      }
    })
  );
};
