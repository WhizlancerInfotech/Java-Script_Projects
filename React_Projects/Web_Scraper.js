import requests
from bs4 import BeautifulSoup

url = "https://news.ycombinator.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

for news in soup.find_all("a", class_="storylink")[:5]:
    print(news.text)
