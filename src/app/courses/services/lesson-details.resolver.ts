import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";
import { LessonDetail } from "../model/lesson-detail";

export const LessonDetailsResolverFn: ResolveFn<LessonDetail> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  courseService = inject(CoursesService)
): Observable<LessonDetail> => {
  // const courseUrl = route.parent.paramMap.get("courseUrl");
  const courseUrl = route.paramMap.get("courseUrl"); // paramsInheritanceStrategy:'always' this will allow to access all parent route data
  const lessonSeqNo = route.paramMap.get("lessonSeqNo");
  return courseService.loadLessonDetail(courseUrl, lessonSeqNo);
};
