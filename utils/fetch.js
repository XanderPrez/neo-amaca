const CITIES_URL = "https://api.musement.com/api/v3/cities/";
const ACTIVITIES_URL = "https://api.musement.com/api/v3/activities/";

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

export { getCities, getActivities, getCityActivities };