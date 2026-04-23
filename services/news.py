from dotenv import load_dotenv
from pprint import pprint
import requests
import os

load_dotenv()   

API_KEY = os.getenv("NEW_API_KEY")
def get_news(city="New Delhi"):
    request_url = f'https://newsapi.org/v2/everything?q={city}&sortby=publishedAt&apiKey={API_KEY}'
    news_data = requests.get(request_url, timeout=5).json()
    articles = news_data.get('articles', [])

    if not articles:
        fallback_url = f'https://newsapi.org/v2/top-headlines?country=in&apiKey={API_KEY}'
        res = requests.get(fallback_url, timeout=5)
        data = res.json()
        articles = data.get("articles", [])

    return articles

if __name__ == "__main__":
    print('\n ***Get news of City***\n')

    city = input('\n Please entert the city name: ')
    #check for empty string or empty spaces
    if not bool(city.strip()):
        city = "New Delhi" 

    news_data = get_news(city)
    print()
    pprint(news_data)
