const router = require('express');
const { BlogPost, User } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
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
                },
            ],
        });

        // Serialize data so that the template can read it
        const blogPosts = blogPostData.map((project) => blogPostData.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blogPost/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
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
                },
            ],
        });

        const blogPost = blogPostData.get({ plain: true });

        res.render('blogPost', {
            ...blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: BlogPost }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    //If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;