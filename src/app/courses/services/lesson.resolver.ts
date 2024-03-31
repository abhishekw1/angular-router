import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";

export const LessonResolverFn: ResolveFn<LessonSummary[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  courseService = inject(CoursesService)
): Observable<LessonSummary[]> => {
  const courseUrl = route.paramMap.get("courseUrl");
  return courseService.loadAllCourseLessonsSummary(courseUrl);
};
