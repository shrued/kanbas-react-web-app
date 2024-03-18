import { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaCaretDown,
  FaCaretRight,
  FaGripVertical,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState();

  return (
    <div className="d-flex flex-column" style={{ minWidth: "80%" }}>
      <div className="float-right">
        <button className="grey-button" type="button">
          Collapse All
        </button>
        <button className="grey-button" type="button">
          View Progress
        </button>
        <button className="grey-button" type="button">
          <FaCheckCircle className="text-success" /> Publish All <FaCaretDown />
        </button>
        {/* <select className="grey-button" id="select-one-option">
          <option selected value="PUBALL">
            <FaCheckCircle className="text-success" /> Publish All
          </option>
          <option value="DUM">Dummy</option>
        </select> */}
        <button className="red-button" type="button">
          <FaPlus /> Module
        </button>
        <button className="grey-button" type="button">
          <FaEllipsisV />
        </button>
      </div>
      <ul className="list-group wd-moduless">
        <li className="list-group-item">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            className="form-control my-2"
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control my-2"
          />
          <div className="d-flex">
            <button
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
              className="btn btn-success m-1"
            >
              Add
            </button>
            <button
              onClick={() => dispatch(updateModule(module))}
              className="btn btn-primary m-1"
            >
              Update
            </button>
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module._id)}
            >
              <button
                onClick={() => dispatch(setModule(module))}
                className="btn btn-warning mx-1"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-danger mx-1"
              >
                Delete
              </button>
              <div>
                <FaGripVertical className="me-2" />
                {selectedModule === module._id ? (
                  <FaCaretDown className="me-2" />
                ) : (
                  <FaCaretRight className="me-2" />
                )}
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
