import requests
import os
from random import randint
from dotenv import dotenv_values
env = dotenv_values(".env")
f = lambda: os.system("cls")

def make_post(requests):
    body = [{
            "nome":"FILM_A",
            "diretor":"DIRETOR_A",
            "ator":"ATOR_A",
            "imdb":4.5,
        },
        {
            "nome":"FILM_B",
            "diretor":"DIRETOR_B",
            "ator":"ATOR_B",
            "imdb":5,
        },
        {
            "nome":"FILM_C",
            "diretor":"DIRETOR_C",
            "ator":"ATOR_C",
            "imdb":6.5,
        },
        {
            "nome":"FILM_D",
            "diretor":"DIRETOR_D",
            "ator":"ATOR_D",
            "imdb":8.5,
        }
    ]
    
    out_b = body[randint(0,len(body)-1)]
    requests.post(env["URL_POST"], json=out_b)

def make_get(requests):
    requests.get(env["URL"])

def run():
    while True:
        try:
            with requests.Session() as request:
                make_get(requests)
                make_post(requests)
                f()
                print("Fazendo requisições")
        except:
            f()
            print("Erro")


run()