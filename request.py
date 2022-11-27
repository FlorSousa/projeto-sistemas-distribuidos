import requests
from dotenv import dotenv_values
env = dotenv_values(".env")
print(env["URL"])
def make_post(requests):
    body = {
            "nome":"Os vingadores",
            "diretor":"Joss Whedon",
            "ator":"Robert Downey Jr",
            "imdb":4.5,
    }
    requests.post(env["URL"])

def make_get(requests):
    requests.get(env["URL"])

def run():
    while True:
         with requests.Session() as request:
            make_get(requests)
            make_post(requests)
            


run()