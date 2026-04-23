console.log("I am running");

const form = document.getElementById("searchForm");
const weatherDiv = document.querySelector(".weather");
const newsDiv = document.querySelector(".news");

async function fetchdata(city) {
  if (!city.trim()) {
    alert("Enter a City");
    return;
  }

  localStorage.setItem("city", city);

  weatherDiv.innerHTML = "Loading Weather...";
  newsDiv.innerHTML = "Loading News...";

  // WEATHER
  try {
    const weatherRes = await fetch(`/api/weather?city=${city}`);
    const weather = await weatherRes.json();
    const icon = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    if (weather.cod !== 200) {
      weatherDiv.innerHTML = "City Not Found";
    } else {
      weatherDiv.innerHTML = `
        <h2>City: ${weather.name}</h2>
        <p>Temperature: ${weather.main.temp} °C</p>
        <p>Description: ${weather.weather[0].description}</p>
        <p>Max Temperature: ${weather.main.temp_max} °C</p>
        <p>Min Temperature: ${weather.main.temp_min} °C</p>
        <p>Humidity: ${weather.main.humidity} %</p>
        <img src="${iconUrl}" alt="${weather.weather[0].description}">
      `;
    }
  } catch (error) {
    weatherDiv.innerHTML = "Weather error";
  }

  // NEWS
  try {
    const newsRes = await fetch(`/api/news?city=${city}`);
    const newsData = await newsRes.json();
    newsDiv.innerHTML = newsData.articles
      .slice(0, 5)
      .map(
        (article) => `
    <div class="news-card">
      ${article.urlToImage ? `<img src="${article.urlToImage}" class="news-img">` : ""}
      <h3 class="news-title">${article.title}</h3>
      <p class="news-desc">${article.description || "No description available"}</p>
      <a href="${article.url}" target="_blank" class="news-link">Read more →</a>
    </div>
  `,
      )
      .join("");
  } catch (error) {
    console.error("NEWS ERROR:", error);
    newsDiv.innerHTML = "News not available";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("cityInput").value;
  fetchdata(city);
});

window.addEventListener("load", () => {
  const savedCity = localStorage.getItem("city") || "New Delhi";
  fetchdata(savedCity);
});
