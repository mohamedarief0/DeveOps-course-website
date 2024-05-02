import React from "react";
import "./HeaderTab.css"

function HeaderTab({ activeTab, handleNavItemClick }) {
  return (
    <>
      <ul className="nav d-flex justify-content-between w-100">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "DeveOps" && "active"}`}
            aria-current="page"
            href="#"
            onClick={() => handleNavItemClick("DeveOps")}
          >
            Deveops
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Develop" && "active"}`}
            aria-current="page"
            href="#"
            onClick={() => handleNavItemClick("Develop")}
          >
            Develop
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Contact" && "active"}`}
            aria-current="page"
            href="#"
            onClick={() => handleNavItemClick("Contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Jenkins" && "active"}`}
            aria-current="page"
            href="#"
            onClick={() => handleNavItemClick("Jenkins")}
          >
            Jenkins
          </a>
        </li>
      </ul>
    </>
  );
}

export default HeaderTab;
