const phoneBook = require("./../models/phoneBookSchema");
const formidable = require("formidable");
const phoneBookSchema = require('mongoose').model("phoneBookSchema");
const fs = require('fs');

module.exports = (req,res)=>{
  if(req.pathname=== '/' && req.method ==='GET'){
      fs.readFile("./index.html",(err,data)=> {
          if(err){
              console.log(err);
              return;
          }
          res.writeHead(200,{
              'Content-Type':'text/html'
          });
        let displayPhonebook =   '';
          phoneBook.find({}).then(phones=>{
              for (let phone of phones) {
                displayPhonebook+=`<tr><th>${phone.firstName}</th><th>${phone.address}</th><th>${phone.phoneNum}</th></tr>`
              }
              data=data
                  .toString()
                  .replace(`<tr class="replace"></tr>`,displayPhonebook);
              res.end(data);
          });



          })
  }else if(req.pathname==='/'&&req.method==='POST'){
 const form  = new formidable.IncomingForm();
 form.parse(req,(err,fields,files)=>{
     res.writeHead(200,{
         'content-type':'text/plain'
     });
     const firstName = fields.firstName;
     const address = fields.address;
     const phoneNum = fields.phoneNum;
     phoneBookSchema.create({firstName,address,phoneNum
       }).then((tag)=>{
         res.writeHead(302,{
             location:'/'
         });
         res.end();
     }).catch(err=>{
         res.writeHead(500,{
             'content-type':'text/plain'
         });
         res.write('500 Server Error');
         res.end();
     });

     res.writeHead(302,{
         location:'/'
     });
     res.end();
 })
    }
  else{
      return true;
  }
}