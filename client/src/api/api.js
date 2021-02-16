import { API } from "../config";

export const getPhones = () => {
  return fetch(`${API}/all`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getPhone = (phoneId) => {
  return fetch(`${API}/detail/${phoneId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const createPhone = (phone) => {
  return fetch(`${API}/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: phone,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editPhone = (phoneId, phone) => {
  return fetch(`${API}/${phoneId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    body: phone,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePhoneFromCatalogue = (phoneId) => {
  return fetch(`${API}/${phoneId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
