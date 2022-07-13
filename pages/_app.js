import { CitiesWrapp } from "../Context/CitiesContext/ContextCities";
import { BestOffersWrap } from "../Context/BestOffersContext/ContextBestOffers";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CitiesWrapp>
      <BestOffersWrap>
        <Component {...pageProps} />
      </BestOffersWrap>
    </CitiesWrapp>
  );
}

export default MyApp;
