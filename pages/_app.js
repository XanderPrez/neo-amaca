// import { ActivitiesWrapp } from "../Context/activities/ContextActivities";
import { ActivitiesWrapp } from "../Context/activities/activities";
import { CitiesWrapp } from "../Context/cities/ContextCities";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ActivitiesWrapp>
      <CitiesWrapp>
        <Component {...pageProps} />
      </CitiesWrapp>
      </ActivitiesWrapp>

  );
}

export default MyApp;
