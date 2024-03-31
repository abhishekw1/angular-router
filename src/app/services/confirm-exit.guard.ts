import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";

export const ConfirmExitGuardFn: CanDeactivateFn<CourseComponent> = (
  component: CourseComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): boolean => {
  return component.confirmExit();
};
