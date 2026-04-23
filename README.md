#  Smart Dashboard (Weather + News)

A dynamic Flask web application that displays:

*  Real-time weather data using the OpenWeather API
*  Latest news headlines using the NewsAPI

Built with a modern architecture where:

* Flask acts as a backend API
* JavaScript (Fetch API) handles dynamic UI updates (no page reload)

---

##  Features

###  Weather

* Search weather by city name
* Temperature (°C), min/max temperature
* Humidity and weather description
* Weather icon display

###  News

* Fetch latest news based on searched city
* Displays top 5 articles (prevents overflow)
* Article title, description, and link
* Optional news images

###  User Experience

* No page reload (fully dynamic updates)
* Loading states for better UX
* Error handling (invalid city, API failure)
* Saves last searched city using localStorage

---

##  Architecture

Frontend (JavaScript - Fetch API)
↓
Flask Backend API (/api/weather, /api/news)
↓
External APIs (OpenWeather + NewsAPI)

---

##  Tech Stack

* Python
* Flask
* OpenWeather API
* NewsAPI
* HTML, CSS (Jinja Templates)
* JavaScript (Fetch API)
* Requests
* Python-dotenv
* Waitress (for production deployment)

---

##  Project Structure

flask_dashboard/
├── app.py
├── services/
│   ├── weather.py
│   └── news.py
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── requirements.txt
├── README.md
├── .env.example
└── .gitignore

---

##  Setup Instructions

```bash
# 1) Clone the repository
git clone https://github.com/nerd-10/Flask_App_Weather_News
cd openweather-flask-app

# 2) Install dependencies
pip install -r requirements.txt

# 3) Create a .env file and add your API keys
WEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_news_api_key

# 4) Run the app
python app.py
```

---

##  Live Demo

 https://openweather-flask-app.onrender.com/

---

##  Notes

* NewsAPI free tier:

  * May return slightly older articles
  * May not provide results for smaller cities
* A fallback to general news is implemented


---

##  Version History

* **V1** → Weather app (Flask + templates)
* **V2** → Added News API
* **V3** → JavaScript Fetch API (no reload, dynamic UI)

---

##  Author

Made by Nerd Kun
GitHub: https://github.com/nerd-10

---

##  Support

If you like this project, consider giving it a ⭐ on GitHub!
