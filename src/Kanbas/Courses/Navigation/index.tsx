import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { HiEyeSlash } from "react-icons/hi2";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "ZoomMeetings",
    "Assignments",
    "Grades",
  ];
  const hidden_links = [
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
  ];
  const { pathname } = useLocation();
  return (
    <>
      <p className="grey-text">202410_1 Spring 2024 Semest...</p>
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
        {hidden_links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={link}>
              {link} <HiEyeSlash style={{ color: "black" }} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseNavigation;
