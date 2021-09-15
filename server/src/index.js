const express = require('express');
//const cors = require('cors');
const bodyParse = require('body-parser');
const multiparty = require('connect-multiparty');


const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended:true}));


// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus:200
// }

// app.use(cors(corsOptions));
const multiPartyMiddle = multiparty({ uploadDir:'./uploads'});

app.post('/upload', multiPartyMiddle, (req,res)=>{
    const files = req.files;
    console.log(files);
    res.json({ message:files });
});


app.get('/DonwloadExcel' , (req,res)=>{
    res.download('./uploads/38Xu4Nrh2X8OQVCOkV0MmqYD.pdf')
});

app.get('/DonwloadPDF' , (req,res)=>{
    res.download('./uploads/P1_VBz6xlaHKS2H4KINlbJ9k.pdf')
})

app.unsubscribe((err,req,res,next)=> res.json({
    error:err.message
}));

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000")
});