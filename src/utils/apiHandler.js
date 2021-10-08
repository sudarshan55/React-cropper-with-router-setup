import { API_BASE_URL } from "./../config/config";

export async function apiHandler(url, data, method = "POST") {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const requestURL = `${API_BASE_URL}${url}`;
    const response = await fetch(requestURL, requestOptions);
    return response.json();
  } catch (err) {
    console.log("exception in API_handler ", err.message);
  }
}

//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGYxMzRjZDRhN2E3OTMwNzRkMTg4ODIiLCJpYXQiOjE2MzEyNTg2ODEsImV4cCI6MTY5MTI1ODY4MSwidHlwZSI6ImFjY2VzcyJ9.FAcM6r4P6MktpeerX4J0cBh9CVH0YDMFTZ8niIZRsC8"
//   );
