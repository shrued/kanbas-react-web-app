import {
  FaArrowCircleRight,
  FaBan,
  FaBell,
  FaBullhorn,
  FaCalendar,
  FaChartBar,
  FaCheckCircle,
  FaCrosshairs,
  FaFileImport,
  FaTimes,
} from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <ModuleList />
      <div className="course-status">
        <div className="w-100">
          <h2 className="course-status-title">Course Status</h2>
          <div className="buttons-flex">
            <button type="button" className="grey-button px-3">
              <FaBan /> Unpublish
            </button>
            <button type="button" className="opaque-green-button px-3">
              <FaCheckCircle /> Published
            </button>
          </div>
          <div className="course-action-buttons">
            <ul>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaFileImport /> Import Existing
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaArrowCircleRight /> Import from Commons
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaCrosshairs /> Choose home
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaChartBar /> View course
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaBullhorn /> New Announcement
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaChartBar /> New Analytics
              </button>
              <button
                type="button"
                className="grey-button w-100 my-1"
                style={{ textAlign: "left" }}
              >
                <FaBell /> View notifications
              </button>
            </ul>
          </div>
        </div>
        <div className="w-100">
          <h2 className="course-status-title">To Do</h2>
          <hr />
          <a href="#" className="slide-links">
            <span className="custom-badge">1</span> Grade A1 - ENV + HTML
            <FaTimes style={{ float: "right" }} />
          </a>
          <p className="grey-text">100 pts • Sep 18 at 11:58PM</p>
        </div>
        <div className="w-100">
          <div className="buttons-flex">
            <h2 className="course-status-title">Coming Up</h2>
            <a href="#" className="slide-links">
              <FaCalendar style={{ color: "#3d454c" }} /> View Calendar
            </a>
          </div>
          <hr />

          <ul className="lecture-links">
            <li>
              <a href="#" className="slide-links">
                <FaCalendar style={{ color: "#3d454c" }} />
                Lecture Sep 7
              </a>
              <p className="grey-text mb-0">CS3462.245456.24533</p>
              <p className="grey-text">Sep 11 at 11:58PM</p>
            </li>
            <li>
              <a href="#" className="slide-links">
                <FaCalendar style={{ color: "#3d454c" }} />
                Lecture Sep 11
              </a>
              <p className="grey-text mb-0">CS3462.245456.24533</p>
              <p className="grey-text">Sep 11 at 11:58PM</p>
            </li>
            <li>
              <a href="#" className="slide-links">
                <FaCalendar style={{ color: "#3d454c" }} />
                Lecture Sep 13
              </a>
              <p className="grey-text mb-0">CS3462.245456.24533</p>
              <p className="grey-text">Sep 11 at 11:58PM</p>
            </li>
            <li>
              <a href="#" className="slide-links">
                12 more in the next week...
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
