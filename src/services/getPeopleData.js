import {
  HTTPS,
  SWAPI_ROOT,
  GUIDE_PEOPLE,
  GUIDE_ROOT_IMG,
  GUIDE_PEOPLE_EXT,
  SWAPI_PEOPLE,
} from "../constants/api";

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = (id) =>
  `${HTTPS + GUIDE_ROOT_IMG}/${GUIDE_PEOPLE}/${id + GUIDE_PEOPLE_EXT}`;
