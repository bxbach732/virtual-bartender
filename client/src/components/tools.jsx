import React from "react";

async function getURL(path) {
  const response = await fetch(path, {
    method: "GET",
  });
  return response;
}

async function postURL(path, items) {
  const response = await fetch(path, {
    method: "POST",
    body: JSON.stringify(items),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
async function putURL(path) {
  const response = await fetch(path, {
    method: "PUT",
  });
  return response;
}
export { getURL, postURL, putURL };
