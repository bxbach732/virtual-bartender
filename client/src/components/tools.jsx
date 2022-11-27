import React from "react";

const baseUrl = window.location.hostname === "localhost" ? "http://localhost:7777" : ""

async function getURL(path, headers) {
  const response = await fetch(baseUrl + path, {
    method: "GET",
    headers: headers,
  });
  return response;
}

async function postURL(path, items) {
  const response = await fetch(baseUrl + path, {
    method: "POST",
    body: JSON.stringify(items),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
async function putURL(path) {
  const response = await fetch(baseUrl + path, {
    method: "PUT",
  });
  return response;
}

export function f(s){
  if(typeof s === "string"){
    return s.replaceAll("\n", "<br/>").replaceAll("/n", "<br/>"); 
  }
  return s;
}

export { getURL, postURL, putURL };
