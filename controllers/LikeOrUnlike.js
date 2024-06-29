const Like = require("../models/like");
const Post = require("../models/post");

exports.likePage = async (req, res) => {
    try{
        const { user, post } = req.body;
        const newLike = new Like({
            user,
            post
        });

        const saveLike = await newLike.save();
        console.log(saveLike);

        const updatePost = await Post.findByIdAndUpdate(post ,{ $push : {likes : saveLike._id} }, {new : true})
        .populate('likes')
        .exec();
        console.log(updatePost);

        res.status(200).json({
            success : true,
            data : updatePost
        });
    }catch(err){
        console.log('Error liking the page');
        console.log(err);
        res.status(500).json({
            success : false,
            error : err.message
        });
    };
};

exports.unlikePage = async (req, res) => {
    try{
        const { post, like } = req.body;

        const data = await Like.findByIdAndDelete({_id: like});

        const updatePost = await Post.findByIdAndUpdate({
            _id : data.post
        },{ $pull : {likes : like} }, {new : true})
        .populate('likes')
        .exec();

        res.status(200).json({
            success : true,
            data : updatePost
        });
    }catch(err){
        console.log('Error unliking the page');
        console.log(err);
        res.status(500).json({
            success : false,
            error : err.message
        });
    };
};