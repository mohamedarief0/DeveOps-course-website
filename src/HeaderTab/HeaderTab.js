import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./HeaderTab.css";

function HeaderTab({ activeTab, handleNavItemClick }) {
  return (
    <ul className="nav d-flex justify-content-between w-100">
      <li className="nav-item">
        <Link
          to="/dashboard/devops" // Update to appropriate route
          className={`nav-link ${activeTab === "DeveOps" && "active"}`}
          onClick={() => handleNavItemClick("DeveOps")}
        >
          Deveops
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/develop" // Update to appropriate route
          className={`nav-link ${activeTab === "Develop" && "active"}`}
          onClick={() => handleNavItemClick("Develop")}
        >
          Develop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/contact" // Update to appropriate route
          className={`nav-link ${activeTab === "Contact" && "active"}`}
          onClick={() => handleNavItemClick("Contact")}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/jenkins" // Update to appropriate route
          className={`nav-link ${activeTab === "Jenkins" && "active"}`}
          onClick={() => handleNavItemClick("Jenkins")}
        >
          Jenkins
        </Link>
      </li>
    </ul>
  );
}

export default HeaderTab;
