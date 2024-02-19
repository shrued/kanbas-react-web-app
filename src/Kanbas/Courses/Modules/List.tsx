import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
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

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

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
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaGripVertical className="me-2" />
              {selectedModule._id === module._id ? (
                <FaCaretDown className="me-2" />
              ) : (
                <FaCaretRight className="me-2" />
              )}
              {module.name}
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
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
