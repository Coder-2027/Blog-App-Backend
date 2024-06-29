const Comment = require('../models/comment');
const Post = require('../models/post');

exports.createComment = async (req, res) => {
    try{
        const {post, user, comment} = req.body;
        const newComment = new Comment({post, user, comment});

        const data = await newComment.save();
        console.log(data);

        const updatePost = await Post.findByIdAndUpdate(post, {$push : {comments : data._id}}, {new : true})
        .populate('comments')
        .exec();

        res.status(200).json({
            success : true,
            message : "Comment created successfully",
            post : updatePost,
        });

    }catch(err){
        console.error(err);
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
};