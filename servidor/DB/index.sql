CREATE DATABASE sisfilme;
CREATE TABLE IF NOT EXISTS filmes {
    Diretor varchar(255),
    Ator varchar(255),
    Nome varchar(255),
    IMDB real,
    created_at DATE,
    updated_at DATE
}