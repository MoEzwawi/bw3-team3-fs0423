export const ALL_PROFILES = "ALL_PROFILES";
export const MY_PROFILE = "MY_PROFILE";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzMmUxMWRkOTllZjAwMTlhMDkyZWYiLCJpYXQiOjE2OTk5NTAwOTcsImV4cCI6MTcwMTE1OTY5N30.0Lrp33zzPyoU9V1bSkuoimzq5n89mmTJkFLONrDUqQI
`;

export const allProfilesAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: ALL_PROFILES,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const myProfileAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: MY_PROFILE,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  payload: token,
});
