import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useActiveTab } from "../ActiveTabProvider/ActiveTabProvider";

function Home() {
  const { setSelectedLabel } = useActiveTab();


  function handleCardClick(label) {
    setSelectedLabel(label);
  }

  function CourseSubCards({ label, className, to }) {
    const handleClick = () => {
      setSelectedLabel(label); // Pass the label value to the onClick handler
      console.log(label);
    };
    return ( 
      <Link className={className} to={to} onClick={handleClick}>
        <div className="card-body justify-content-center align-items-center">
          <h5 className="card-title text-black">{label}</h5>
          <p className="mt-2" style={{ fontSize: 16, color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur. Habitasse diam consequat
            enim euismod fringilla. Ullamcorper et hendrerit purus etiam egestas
            lacus.
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="home-main-container">
      <div>
        <CourseSubCards
          label="DeveOps"
          className="homes-card"
          to="/dashboard/devops"
          onClick={() => handleCardClick("DeveOps")}
        />
        <CourseSubCards
          label="Contact"
          className="homes-card"
          to="/dashboard/contact"
          onClick={() => handleCardClick("Contact")}
        />
      </div>
      <div>
        <CourseSubCards
          label="Develop"
          className="homes-card"
          to="/dashboard/develop" onClick={() => handleCardClick("Develop")}
        />
        <CourseSubCards
          label="Jenkins"
          className="homes-card"
          to="/dashboard/jenkins"
          onClick={() => handleCardClick("Jenkins")}
        />
      </div>
    </div>
  );
}

export default Home;