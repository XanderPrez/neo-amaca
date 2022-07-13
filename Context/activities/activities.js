import { createContext, useContext, useEffect, useState } from "react";
import { getActivities } from "../../utils/fetch";


const AppContext = createContext();

export function ActivitiesWrapp({ children }) {

  const [Activities, useActivities] = useState();

  useEffect(() => {
    getActivities().then((data) => useActivities(data.data));
  }, []);

  console.log("Activities", Activities)

  return (
    <AppContext.Provider value={Activities}>
      {children}
    </AppContext.Provider>
  );
}

export function ActivitiesApi() {
  return useContext(AppContext);
}

/* per utilizzare lo useContext basta importare ActivitiesApi() e mappare
 (console log  nella paggina di destinazione funzionano solo dentro in return 
    altrimenti da errore)*/
