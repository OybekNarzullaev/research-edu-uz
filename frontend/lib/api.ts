import { BASE_API_URL } from "./constants";

async function request(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(BASE_API_URL + "/api/" + endpoint, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("API Error: " + res.statusText);
  }
  return res.json();
}

const api = {
  get: (url: string) => request(url),
};

export default api;
