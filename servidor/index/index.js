import express from "express";
const app = express();
import Filmes from './sequelize.js'

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.get("/get/filmes", async (req,res)=>{
    try{
        const r = await Filmes.findAll();
        res.json(r)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    } 
})

app.get("/get/filmes/filter", async (req,res)=>{
    try{
        const dataFilter = req.query;
        console.log(dataFilter)
        res.json(await Filmes.findAll({where:dataFilter}))
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

app.post("/new/filme", async (req,res)=>{
    try{
        const data = req.body;
        console.log(data)
        const [r,created] = await Filmes.findOrCreate({
            where:data,
            defaults:data
        })
        created ? res.sendStatus(200) : res.sendStatus(403);
        
    }catch(e){
        res.sendStatus(500)
    }  
    
})

app.get("/", (req,res) => {
    res.json({"msg":"ok"})
})

app.listen(3030);

