import React, { useState } from "react";
import HeaderTab from "../HeaderTab/HeaderTab";
import DeveOps from "../DeveOperation/Deveops";
import Develop from "../Develop/Develop";
import Contact from "../Contact/Contact";
import Jenkins from "../Jenkins/Jenkins";
import { useActiveTab } from "../ActiveTabProvider/ActiveTabProvider";

function Dashboard() {
  const { selectedLabel } = useActiveTab();
  const [activeTab, setActiveTab] = useState(selectedLabel || "Develop");

  const handleNavItemClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "DeveOps":
        return <DeveOps />;
      case "Develop":
        return <Develop />;
      case "Contact":
        return <Contact />;
      case "Jenkins":
        return <Jenkins />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <HeaderTab
            activeTab={activeTab}
            handleNavItemClick={handleNavItemClick}
          />
          <div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
