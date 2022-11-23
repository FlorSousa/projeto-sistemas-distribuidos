import {sequelize as Sequelize} from "sequelize";
const sequelize = new Sequelize('sisfilme','host','adm',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
})

const Filmes = sequelize.define('filmes',{
    Diretor: {
        type: Sequelize.STRING
    },
    Ator: {
        type: Sequelize.STRING
    },
    Nome: {
        type: Sequelize.STRING
    },
    IMDB: {
        type: Sequelize.FLOAT
    }
})

Filmes.sync({force:false})

module.exports = {Sequelize, sequelize, Filmes}