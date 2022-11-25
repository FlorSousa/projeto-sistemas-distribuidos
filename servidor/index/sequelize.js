import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.POSTGRES_PASSWORD)
const sequelize = new Sequelize(process.env.POSTGRES_DB,process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD,{
    host:process.env.POSTGRES_HOST,
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
export default Filmes