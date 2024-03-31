import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";
import { CourseResolverFn } from "./services/course.resolver";
import { LessonDetailComponent } from "./lesson/lesson-detail.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { LessonResolverFn } from "./services/lesson.resolver";
import { LessonDetailsResolverFn } from "./services/lesson-details.resolver";
import { AuthGuardFn } from "../services/auth.guard";
import { ConfirmExitGuardFn } from "../services/confirm-exit.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    canActivate: [AuthGuardFn],
    canActivateChild: [AuthGuardFn],
    canDeactivate: [ConfirmExitGuardFn],
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: LessonResolverFn,
        },
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve: {
          lesson: LessonDetailsResolverFn,
        },
      },
    ],
    resolve: {
      course: CourseResolverFn,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // CourseResolver
  ],
})
export class CoursesRoutingModule {}
