import express from "express";
const app = express();
import Filmes from './sequelize.js'

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.get("/get/filmes", async (req,res)=>{
    return await Filmes.findAll();
})

app.get("/get/filmes/filter", async (req,res)=>{
    const dataFilter = req.query;
    return await Filmes.findAll({where:{dataFilter}})
})

app.post("/new/filme", async (req,res)=>{
    const data = req.body;
    const [r,created] = await Filmes.findOrCreate({
        where:data,
        defaults:data
    })
    return created ? res.sendStatus(200) : res.sendStatus(403);
})

app.listen(3030);