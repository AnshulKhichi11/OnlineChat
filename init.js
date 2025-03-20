const mongoose = require('mongoose');
const chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


let allchats = [
    {
        from: "amit",
        to :"vinit",
        msg: "hii vinit whattsapp",
        Created_at: new Date()
    },
    {
        from: "anui",
        to :"rui",
        msgsapp: "hi rui kya hal chal",
        Created_at: new Date()
    },
    {
        from: "olli",
        to :"joy",
        msg: "hii joy khana kha liya",
        Created_at: new Date()
    },
    {
        from: "rain",
        to :"shani",
        msg: "hii shani kal ka kam ho gaya",
        Created_at: new Date()
    },
];

chat.insertMany(allchats);
