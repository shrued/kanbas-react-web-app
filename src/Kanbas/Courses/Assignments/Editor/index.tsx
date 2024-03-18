import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <h2>Assignment Name</h2>
        <div>
          <button type="button" className="published-button">
            <FaCheckCircle className="text-success me-2" />
            Published
          </button>
          <button className="grey-button" type="button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <input value={assignment?.title} className="form-control mb-2" />
      <button onClick={handleSave} className="red-button ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="grey-button float-end"
      >
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;
