from dotenv import load_dotenv
from pprint import pprint
import requests
import os

load_dotenv()
API_KEY = os.getenv("WEATHER_API_KEY")

def get_current_weather(city="New Delhi"):
    request_url =f'https://api.openweathermap.org/data/2.5/weather?&appid={API_KEY}&q={city}&units=metric'

    weather_data = requests.get(request_url, timeout=5).json()

    return weather_data

if __name__ == "__main__":
    print('\n ***Get Current weather of City***\n')

    city = input('\n Please entert the city name: ')
    #check for empty string or empty spaces
    if not bool(city.strip()):
        city = "New Delhi" 

    weather_data = get_current_weather(city)
    print()
    pprint(weather_data)
