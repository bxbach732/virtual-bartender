// use different url for development and deployment
const baseUrl =
  window.location.hostname === "localhost" ? "http://localhost:7777" : "";

//GetURL with headers
async function getURL(path, headers) {
  const response = await fetch(baseUrl + path, {
    method: "GET",
    headers: headers,
  });
  return response;
}

// post to a url with items as body
async function postURL(path, items) {
  const response = await fetch(baseUrl + path, {
    method: "POST",
    body: JSON.stringify(items),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
// put to a url
async function putURL(path) {
  const response = await fetch(baseUrl + path, {
    method: "PUT",
  });
  return response;
}

// change \n to /n, used in rendering instructions
export function f(s) {
  if (typeof s === "string") {
    return s.replaceAll("\n", "<br/>").replaceAll("/n", "<br/>");
  }
  return s;
}

export { getURL, postURL, putURL };
