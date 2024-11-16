const express = require("express")
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended:true}))  //to read url data only
app.use(express.json());          //able to read json data

app.get("/register",(req,res)=>{          //get request
    let {user , password}= req.query;
    res.send(`standard GET response. welcome! ${user}`);
})

app.post("/register", (req, res)=>{        //post request
    let {user, password} = req.body;
    res.send(`standard POST response. welcome! ${user}`);
})

app.listen(port, ()=>{                    //listener
    console.log(`listening to port ${port}`)
})