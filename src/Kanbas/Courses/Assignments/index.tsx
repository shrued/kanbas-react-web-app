import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaFileSignature,
  FaGripVertical,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import "./index.css";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const [deleteAssignmentID, setDeleteAssignmentID] = useState(null);
  const [assignmentToDelete, setAssignmentToDelete] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const dispatch = useDispatch();
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  ).filter((assignment: { course: string }) => assignment.course === courseId);

  const openModal = (
    courseId: React.SetStateAction<null>,
    courseTitle: React.SetStateAction<string>
  ) => {
    setDisplayModal(true);
    setDeleteAssignmentID(courseId);
    setAssignmentToDelete(courseTitle);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Assignment"
              style={{ borderColor: "#ccc" }}
            />
          </div>
        </div>
        <div className="float-right">
          <button className="grey-button" type="button">
            <FaPlus /> Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/New`}>
            <button className="red-button" type="button">
              <FaPlus /> Assignment
            </button>
          </Link>
          <button className="grey-button" type="button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr style={{ marginRight: "6px" }} />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaGripVertical className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="custom-badge">40% of Total</button>
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item d-flex align-items-center justify-content-between">
                <div>
                  <FaGripVertical className="me-2" />
                  <FaFileSignature
                    className="me-2"
                    style={{ color: "rgb(64, 151, 64)" }}
                  />

                  <Link
                    className="module-title"
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <div style={{ marginLeft: "2.5em" }}>
                    <p className="grey-text">
                      Week 0 - SETUP - Week starting on Monday, September 5th
                      (9/5/2022) Module |
                    </p>
                    <p className="grey-text">
                      <b>Due</b> Sept 18, 2022 at 11:59 pm | 100 pts
                    </p>
                  </div>
                </div>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                  <AiFillDelete
                    className="fs-4"
                    onClick={() => openModal(assignment._id, assignment.title)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <Modal show={displayModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this assignment?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will not be able to recover assignment:{" "}
          <b>{assignmentToDelete}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => {
              closeModal();
              dispatch(deleteAssignment(deleteAssignmentID));
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Assignments;
