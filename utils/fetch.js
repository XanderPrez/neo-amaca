const CITIES_URL = "https://api.musement.com/api/v3/cities/";
const ACTIVITIES_URL = "https://api.musement.com/api/v3/activities/";
const BEST_OFFERS_URL =
  "https://api.musement.com/api/v3/activities?sort_by=rating,price&limit=15";

const getCities = async (cityId = " ") => {
  const res = await fetch(`${CITIES_URL}${cityId}`);
  return res.json();
};

const getActivities = async (activityUuid = " ") => {
  const res = await fetch(`${ACTIVITIES_URL}${activityUuid}`);
  return res.json();
};

const getCityActivities = async (cityId = " ") => {
  const res = await fetch(`${CITIES_URL}${cityId}/activities`);
  return res.json();
};

const getBestOffers = async () => {
  const res = await fetch(`${BEST_OFFERS_URL}`, {
    headers: {
      "Accept-Language": "en-US",
      "X-Musement-Currency": "USD",
    },
  });
  return res.json();
};

console.log(getCities());

export { getCities, getActivities, getCityActivities, getBestOffers };
