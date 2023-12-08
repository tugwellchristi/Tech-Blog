const router = require('express').Router();
const { BlogPost } = require('../../models');

router.get('/posts-list/:q', async (req, res) = {
    try {
        const response = await fetchPostsList(req.params.q);
        res.json(response.data);
    }
})