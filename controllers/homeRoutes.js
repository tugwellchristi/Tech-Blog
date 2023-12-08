const router = require('express');
const { BlogPost, User} = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    const blogPostData = await BlogPost.findAll({
        attributes: [
            'id',
            'post_topic',
            'post_content',
            'post_comment',
            'date_created',
        ], 
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
})

module.exports = router;