import { createContext, useContext, useEffect, useState } from "react";
import { getBestOffers } from "../../utils/fetch";

const AppContext = createContext();

export function BestOffersWrap({ children }) {
  const [offers, useOffers] = useState();

  useEffect(() => {
    getBestOffers().then((data) => useOffers(data.data));
  }, []);

  return <AppContext.Provider value={offers}>{children}</AppContext.Provider>;
}

export function BestyApi() {
  return useContext(AppContext);
}
