const post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const newPost = new post({
            title,
            body
        });

        const savedPost = await newPost.save();
        console.log (savedPost);

        res.status(200).json({
            success : true,
            message: 'Post created successfully',
            data: savedPost
        });
    }catch (err) {
        console.log('Error creating post');
        console.error(err);
        res.status(500).json({
            success : false,
            message: err.message
        });
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await post.find({}).populate("likes").populate("comments").exec();
        res.status(200).json({
            success : true,
            message: 'Posts fetched successfully',
            data: posts
        });
    }catch (err) {
        console.log('Error fetching posts');
        console.error(err);
        res.status(500).json({
            success : false,
            message: err.message
        });
    }
};