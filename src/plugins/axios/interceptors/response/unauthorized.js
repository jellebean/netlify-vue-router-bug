import router from "@/router";

export const onFulfilled = response => response;

export const onRejected = error => {
  // If failed because of cancellation or the response does not have status code 401 and statusText 'Unauthorized', exit
  // early.
  if (
    error.response.status !== 401 ||
    error.response.statusText !== "Unauthorized"
  ) {
    return Promise.reject(error);
  }

  // // Redirect user to about.
  router.push({ name: "login" });

  return Promise.reject(error);
};
