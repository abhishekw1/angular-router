import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

// This is Depcrated , We need to Add into the provider array
// @Injectable()
// export class CourseResolver implements Resolve<Course> {
//   constructor(private coursesService: CoursesService) {}
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Course> {
//     const courseUrl = route.paramMap.get("courseUrl");
//     return this.coursesService.loadCourseByUrl(courseUrl);
//   }
// }

// The benefit of using a functional approach is no need to add created resolver into the providers array!
export const CourseResolverFn: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  coursesService = inject(CoursesService)
): Observable<Course> => {
  const courseUrl = route.paramMap.get("courseUrl");
  return coursesService.loadCourseByUrl(courseUrl);
};
