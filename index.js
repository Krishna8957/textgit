const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended : true,
}));

const productData = [];
const port = process.env.PORT || 5000;

app.listen(port ,() =>{
    console.log(`Connecting the server http://localhost:${port}`)
})

// post api

app.get("/",(req,res)=>{
    res.send("hello this the homepage ")
})

app.post("/api/add_product",(req,res)=>{
    console.log("Result",req.body);

    const pdata = {
        "id": productData.length+1,
        "pname":req.body.pname,
        "pprice":req.body.pprice,
        "pdesc":req.body.pdesc,
    };

productData.push(pdata);
console.log("final",pdata);

res.status(200).send({
    "status code": 200,
    "message":"Product added successfully",
    "product":pdata
})

});

app.get("/api/get_product",(req,res)=>{

    if(productData.length >0){
      res.status(200).send({
        "status_code": 200,
        "product":productData

      })
    } else{
   
        res.status(200).send({
            "status_code": 200,
            "product":[]
    
          })
    }
})