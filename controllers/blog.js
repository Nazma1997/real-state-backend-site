const Blog = require('../models/blog');


const createBlog = async(req, res) => {
  try {
    const {title, image, date,text,category,userId} = req.body;

    const newBlog = await Blog.create({title, image, date,text,category,userId});
    res.status(201).json({message: 'Blog created successfully', newBlog})
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const getAllBlog = async(req, res) => {
  try {
    const blog = (await Blog.find()).reverse();
    res.status(201).json(blog)
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {createBlog, getAllBlog}