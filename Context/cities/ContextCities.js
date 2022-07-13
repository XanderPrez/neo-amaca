import { createContext, useContext, useEffect, useState } from "react";
import { getCities } from "../../utils/fetch";

const AppContext = createContext();

export function CitiesWrapp({ children }) {
  const [cities, useCities] = useState();

  useEffect(() => {
    getCities().then((data) => useCities(data));
  }, []);

  return <AppContext.Provider value={cities}>{children}</AppContext.Provider>;
}

export function CitiesApi() {
  return useContext(AppContext);
}

/* per utilizzare lo useContext basta importare CitiesApi() e mappare 
 (console log  nella paggina di destinazione funzionano solo dentro in return 
    altrimenti da errore)
    */
