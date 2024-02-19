import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaDesktop,
  FaArrowCircleRight,
  FaQuestionCircle,
} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaDesktop className="fs-2" /> },
    { label: "Commons", icon: <FaArrowCircleRight className="fs-2" /> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to="http://northeastern.edu">
          <img className="logo_image" alt="Logo" src="/images/NEULogo.png" />
        </Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={`${pathname.includes(link.label) ? "wd-active" : ""} ${
            link.label === "Account" && !pathname.includes("Account")
              ? "account-icon"
              : ""
          }`}
        >
          <Link to={`/Kanbas/${link.label}`}>
            <span className="icon">{link.icon}</span>{" "}
            {link.label ? link.label : null}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
