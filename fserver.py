from flask import Flask, render_template, request, session
from services.weather import get_current_weather
from services.news import get_news

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route("/api/weather")
def api_weather():
    city = request.args.get("city","New Delhi")
    return get_current_weather(city)

@app.route("/api/news")
def api_news():
    city = request.args.get("city", "India")
    return {"articles": get_news(city)}

if __name__ == "__main__":
   app.run(debug = True)