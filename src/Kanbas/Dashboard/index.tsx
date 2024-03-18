import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

import "./index.css";
import { FaPen } from "react-icons/fa";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <div className="col-3">
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse} className="btn btn-success m-1">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary m-1">
          Update
        </button>
      </div>
      <h2>Published Courses (4)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/courses/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    {course.name}
                    <div className="d-flex">
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end mx-1"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning float-end mx-1"
                      >
                        Edit
                      </button>
                    </div>
                  </Link>
                  <Link
                    className="card-text"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <p>{course.name}</p>
                  </Link>
                  <Link
                    className="card-text"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <FaPen size={20} className="fs-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
