import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose';

export const getPosts = async (req,res) => {
    try { 
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch (error) { 

        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req,res) => {
    
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new PostMessage({ title, message, selectedFile, creator, tags });
    try {
      
       await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const { title, message, creator, selectedFile, tags} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

  

    const updatedPost = { creator, title, message, tags, selectedFile, id: _id}
    await PostMessage.findByIdAndUpdate(_id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}