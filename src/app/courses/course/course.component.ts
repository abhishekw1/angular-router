import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  course: Course;

  couponCode: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    // this.route.data.pipe(map(({ course }) => course));  for async

    this.couponCode = this.route.snapshot.queryParamMap.get("couponCode");
  }

  confirmExit() {
    return confirm(`Are you sure you wnat to exit ${this.course.description}`);
  }
}
