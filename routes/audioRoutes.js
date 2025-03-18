const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const audioDir = path.join(__dirname,"..","public","audio");
router.get("/audio",(req,res)=>{
    fs.readdir(audioDir,(err,files)=>{
        if(err){
            res.status(500).json({ err: "No file or directory with that name"});
        }
        const audioFiles = files.filter(file =>{
            return file.endsWith("mp3");
        });
        const filePaths = audioFiles.map(filePaths, '/media/audio');
        res.json(filePaths);
    });
});
