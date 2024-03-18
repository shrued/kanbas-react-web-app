import {
  FaCaretDown,
  FaCog,
  FaFileExport,
  FaFileImport,
  FaFilter,
  FaKeyboard,
} from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const as = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const es = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <p className="slide-links">
          Gradebook <FaCaretDown />
        </p>

        <div className="float-right">
          <FaKeyboard color="#b12525" className="m-2 me-4" />
          <button type="button" className="grey-button">
            <FaFileImport /> Import
          </button>
          {/* <select className="grey-button" id="select-one-option">
          <option selected value="GBOOK">
            Export
          </option>
          <option value="DUM">Dummy</option>
        </select> */}
          <button type="button" className="grey-button">
            <FaFileExport /> Export
            <FaCaretDown />
          </button>
          <button className="grey-button" type="button">
            <FaCog />
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column w-100">
          <h4>Student Names</h4>
          <select className="grey-button" id="select-one-option">
            <option selected>&#x1F50D; Search Students</option>
            <option value="DUM">Dummy</option>
          </select>
        </div>
        <div
          className="d-flex flex-column w-100"
          style={{ marginLeft: "10px" }}
        >
          <h4>Assignment Names</h4>
          <select className="grey-button" id="select-one-option">
            <option selected>&#x1F50D; Search Assignments</option>
            <option value="DUM">Dummy</option>
          </select>
        </div>
      </div>
      <br />

      <button type="button" className="grey-button">
        <FaFilter /> Apply Filters
      </button>
      <br />
      <br />

      <div className="table-responsive">
        <table
          className="table table-striped table-bordered table-hover"
          style={{ width: "1100px" }}
        >
          <thead>
            <th
              style={{
                verticalAlign: "middle",
                textAlign: "left",
                paddingLeft: "1em",
              }}
            >
              Student Name
              <br />
            </th>
            {as.map((assignment) => (
              <th style={{ textAlign: "center" }}>
                {assignment.title}
                <br />
                Out of 100
              </th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment, index) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td style={{ color: "#b12525" }}>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {db.assignments
                    .filter((assignment) => assignment.course === courseId)
                    .map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return (
                        <td
                          key={assignment._id}
                          style={{ textAlign: "center" }}
                        >
                          {grade?.grade + "%" || ""}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
