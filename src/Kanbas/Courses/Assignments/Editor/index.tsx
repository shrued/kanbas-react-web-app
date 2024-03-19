import { KanbasState } from "../../../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import {
  addAssignment,
  setAssignment,
  updateAssignment,
  initialState,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );

  const handleSave = () => {
    if (assignment && assignment._id) {
      dispatch(updateAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const otherCourse = initialState.assignment;

  const courseAssignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  useEffect(() => {
    if (assignmentId !== "New") {
      const updateAssignment = courseAssignments.find(
        (assignment) => assignment._id === assignmentId
      );
      if (updateAssignment) {
        dispatch(setAssignment(updateAssignment));
      }
    } else {
      dispatch(setAssignment(otherCourse));
    }
  }, [assignmentId, courseAssignments, dispatch]);

  return (
    <>
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
        <input
          value={assignment?.title}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
          className="form-control mb-2"
        />
        <textarea
          className="form-control mb-3"
          rows={7}
          onChange={(e) =>
            dispatch(
              setAssignment({ ...assignment, description: e.target.value })
            )
          }
          value={assignment?.description}
        >
          {assignment ? "Assignment description" : "New Assignment Description"}
        </textarea>

        <div className="mb-4 w-50">
          <div className="row">
            <div className="col text-end">
              <label htmlFor="points" className="form-label">
                Points
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="points"
                value={assignment?.points}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-4 w-50">
          <div className="row">
            <div className="col text-end">
              <label htmlFor="assignment-group" className="form-label">
                Assignment Group
              </label>
            </div>
            <div className="col">
              <select className="form-select" id="assignment-group">
                <option selected value="ASSIGNMENTS">
                  ASSIGNMENTS
                </option>
                <option value="Dummy 1">Dummy 1</option>
                <option value="Dummy 2">Dummy 2</option>
                <option value="Dummy 3">Dummy 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 w-50">
          <div className="row">
            <div className="col text-end">
              <label htmlFor="display-grade" className="form-label">
                Display Grade as
              </label>
            </div>
            <div className="col">
              <select className="form-select" id="display-grade">
                <option selected>Percentage</option>
                <option value="Dummy 1">Dummy 1</option>
                <option value="Dummy 2">Dummy 2</option>
                <option value="Dummy 3">Dummy 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 w-50">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <input
                className="form-check-input"
                type="checkbox"
                value="TEXT"
                name="check-genre"
                id="count"
              />
              &nbsp;
              <label className="form-check-label" htmlFor="count">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 w-50">
          <div className="row">
            <div className="col text-end">Assign</div>
            <div className="col-6">
              <div className="d-flex flex-column border p-3">
                <label htmlFor="assign" className="form-label">
                  Assign to
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="assign"
                  value="Everyone"
                />

                <label htmlFor="due" className="form-label mt-2">
                  Due
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="due"
                  value={assignment?.due}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, due: e.target.value })
                    )
                  }
                />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <label htmlFor="from" className="form-label mt-2">
                      Available From
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="from"
                      value={assignment?.from}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            from: e.target.value,
                          })
                        )
                      }
                    />
                  </div>

                  <div className="d-flex flex-column">
                    <label htmlFor="until" className="form-label mt-2">
                      Until
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="until"
                      value={assignment?.until}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            until: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <button type="button" className="grey-button mt-2">
                  <FaPlus />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <input
              className="form-check-input"
              type="checkbox"
              value="TEXT"
              name="check-genre"
              id="notify"
            />
            &nbsp;
            <label className="form-check-label" htmlFor="notify">
              Notify users that this content has changed
            </label>
          </div>
          <div>
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
        </div>

        <hr />
      </div>
    </>
  );
}
export default AssignmentEditor;
