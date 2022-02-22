const Blog = require('../models/blog.model');

filen = "";


exports.create = (req,res)=>
    {
        const {body}=req;
        let blogToSave = new Blog(body);
        blogToSave.image = filen;
        blogToSave.save()
        .then((success) => {
            console.log("the new blog is : ", success);
            filen = "";
            res.send(success);
        })
        .catch((error) => {
            console.log("blog not saved :( ", error);
            res.status(400).send(error);
        });
    };

exports.findAll = (req,res)=>
    {
        Blog.find()
        .then((success)=>{
            console.log("all my blogs are : ",success);
            res.send(success)
        })
        .catch((error)=>{
            console.log(error);
            res.send(error)
        })
    };

exports.findBlogById = (req,res)=>
    {
        const {id} = req.params;
        Blog.findById({_id : id})
        .then((success) => {
            console.log(`blog ${id} est :`, success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
    }

exports.updateBlog = (req,res)=>
    {
        const {id} = req.params;
        const {body}=req;
        Blog.findOneAndUpdate({_id:id},body)
        .then((success) => {
            console.log(`le blog ${id} est modifié :) `, success);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

    }

exports.deleteBlog = (req,res)=>
    {
        const {id} = req.params;
        Blog.findOneAndDelete({_id:id})
        .then((success) => {
            console.log(`le blog ${id} est supprimé :) `, success);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

    }