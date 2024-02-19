import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import { FaAngleRight, FaGlasses } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const location = useLocation();
  const pathname = location.pathname.split("/").pop();

  return (
    <div>
      <div className="top-container">
        <p className="breadcrumb p-4 m-0">
          <HiMiniBars3
            className="red-breadcrumb"
            style={{ verticalAlign: "middle" }}
          />
          <p className="red-breadcrumb">
            {course?.number} {course?.name}
          </p>
          <FaAngleRight style={{ verticalAlign: "middle" }} />
          <p style={{ color: "#3d454c" }}>{pathname}</p>
        </p>
        <div>
          <button type="button" className="grey-button">
            <FaGlasses /> Student View
          </button>
        </div>
      </div>
      <hr className="mx-3" />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "150px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
