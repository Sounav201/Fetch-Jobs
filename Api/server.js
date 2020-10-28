const createServer = require('http').createServer;
const url= require('url');
const axios=require('axios');
const chalk =require('chalk');
const config= require('./config');
const express=require("express");
//const app=express();
//app.get("/",function(req,res){
  //  res.send("Server is up and running");
//})
//app.listen(3000,() =>{
  //  console.log("Service started")
//})

//require('dotenv').config();
//console.log(process.env);


const headers= {                                //Setting the API up
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
};

//?query=python&location=Kolkata

const decodeArgs =QueryArgs => Array  
    .from(QueryArgs.keys())
    .reduce((acc,key) => ({...acc,[key]:QueryArgs.get(key)}),  {});   // Creating the query function to decode the parameters


const server= createServer((req,res) => {
    const requestURL=url.parse(req.url);
    // { search: 'python',location:'kolkata}
    const decodedArgs=decodeArgs(new URLSearchParams(requestURL.search));
    const {search,location,country='in'} = decodedArgs;

    const targetURL= `${config.Base_url}/${country.toLowerCase()}/${config.Base_args}&${config.Base_keys}&what=${search}&where=${location}`;

    if(req.method ==='GET'){
        console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
        axios.get(targetURL)
            .then(response => {
                res.writeHead(200,headers);
                res.end(JSON.stringify(response.data));
            })
            .catch(error =>{
                console.log(chalk.red(error));
                res.writeHead(500,headers);
                res.end(JSON.stringify(error));
            });
    }
});

server.listen(3000, () =>{
    console.log(chalk.green('Server listening on port 3000'));
})



