import { APISettings } from "../config.js";

export default {
  index(baseURL, data) {
    return fetch(baseURL + `/${data}`, {
      method: "GET",
      mode: "cors",
      //headers: APISettings.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.text();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  indexOnly(baseURL) {
    return fetch(baseURL, {
      method: "GET",
      mode: "cors",
      //headers: APISettings.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.text();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getCountries(baseURL) {
    return fetch(baseURL, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  store(baseURL, data) {
    return fetch(baseURL, {
      method: "POST",
      headers: APISettings.headers,
      mode: "cors",
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.text();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  imgPost(baseURL, data) {
    return fetch(baseURL, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.text();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
