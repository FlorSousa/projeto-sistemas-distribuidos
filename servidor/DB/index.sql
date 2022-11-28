CREATE DATABASE sisfilme;
CREATE TABLE IF NOT EXISTS "filmes" (
    "id"   SERIAL , 
    "diretor" VARCHAR(255), 
    "ator" VARCHAR(255), 
    "nome" VARCHAR(255), "
    imdb" FLOAT, 
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
    PRIMARY KEY ("id")
)
