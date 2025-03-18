const express = require('express');
const app = express();
const images = require('./routes/imagesRoute');
const videos = require('./routes/videosRoute');
const port = 8080;
const path = require("path");
app.use(express.json());
app.use('/media',express.static(path.join(__dirname, "public")));

app.get('/images', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "images"));
});
app.use('/media',express.static(path.join(__dirname,'public')));
app.get('/videos',(req,res)=>{
	res.sendFile(path.join(__dirname,'public','videos'));
});
app.use('/media', images);
app.use('/media', videos);
app.listen(port,()=>console.log(`server listening at: http://localhost:${port}/media`));

