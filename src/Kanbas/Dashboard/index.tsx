import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import { FaPen } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
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
