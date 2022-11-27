import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.POSTGRES_DB,process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD,{
    host:process.env.POSTGRES_HOST,
    port:'5432',
    dialect:'postgres'
})

const Filmes = sequelize.define('filmes',{
    diretor: {
        type: Sequelize.STRING
    },
    ator: {
        type: Sequelize.STRING
    },
    nome: {
        type: Sequelize.STRING
    },
    imdb: {
        type: Sequelize.FLOAT
    }
})

Filmes.sync({force:false})

export default Filmes