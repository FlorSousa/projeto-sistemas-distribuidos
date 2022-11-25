import requests

def run():
    while True:
         with requests.Session() as request:
            request.get("http://www.google.com")


run()

