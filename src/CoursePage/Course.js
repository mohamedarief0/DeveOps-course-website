import React from "react";
import "./Course.css";
import { useNavigate } from "react-router-dom";
function Course() {
  let navigation = useNavigate();
  const onClickHandler = () => {
    navigation("/login");
  };

  // This also an Card course component 
  function CourceCards(props) {
    return (
      <button className={props.className} onClick={onClickHandler}>
        <div className="card-body d-flex justify-content-center align-items-center">
          <h5 className="card-title">{props.lable}</h5>
        </div>
      </button>
    );
  }
  return (
    <>
      <div className="col-md-12">
        <div className="containercenter">
          <CourceCards className="button-card" lable="Essential to devops"/>
          <CourceCards className="button-card-2" lable="Advance to devops"/>
        </div>
      </div>
    </>
  );
}

export default Course;
