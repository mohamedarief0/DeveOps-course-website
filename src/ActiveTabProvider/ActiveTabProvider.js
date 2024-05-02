import React, { createContext, useContext, useState } from "react";

const ActiveTabContext = createContext();

export function useActiveTab() {
  return useContext(ActiveTabContext);
}

function ActiveTabProvider({ children }) {
  const [selectedLabel, setSelectedLabel] = useState(null);

  return (
    <ActiveTabContext.Provider value={{ selectedLabel, setSelectedLabel }}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export default ActiveTabProvider;
