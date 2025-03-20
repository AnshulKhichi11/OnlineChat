const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//connection
main()
.then(()=>{
    console.log("connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

// index route
app.get("/chats" , async (req,res) =>{
    let chats = await chat.find();
    res.render("index.ejs", {chats});
})


//new route
app.get("/chats/new" , (req,res) =>{
    res.render("new.ejs");
})

//create  new route
app.post("/chats", (req,res) =>{
    let { from , to , msg} = req.body;
    let newChat = new chat({
        from: from,
        to : to,
        msg : msg,
        Created_at : new Date()
    });
    newChat.save()
    .then((res) => {
        console.log("chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})

//edit route
app.get("/chats/:id/edit" , async(req,res)=>{
    let {id }  = req.params;
    let Chat = await chat.findById(id);
    res.render("edit.ejs" , {Chat});
})


//update route
app.put("/chats/:id" ,async (req, res) =>{
    let {id }  = req.params;
    let {msg : newmsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(id , {msg : newmsg});
    res.redirect("/chats");
})

//delete route
app.delete("/chats/:id", async(req,res) =>{
    let { id} = req.params;
    let dleletechat = await chat.deleteOne({id : chat.id});
    res.redirect("/chats");
})


// app.get("/" , (req, res)=>{
//     console.log("System working");
// })


const port = 3000;
app.listen(port ,()=>{
    console.log(`this app listining at ${port}`);
})