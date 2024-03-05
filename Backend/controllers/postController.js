const Post = require('../Models/models');

class PostController {
  async createPost(req, res) {
    const { user, title, content } = req.body;
    const newPost = await Post.create({ user, title, content });
    res.json(newPost);
  }

  async getPost(req, res) {
    const posts = await Post.findAll();
    res.json(posts);
  }

  async getOnePost(req, res) {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.json({ message: 'Пост не найден' });
    }
  }

  async updatePost(req, res) {
    const { id, user, title, content } = req.body;
    const updatedPost = await Post.update({ user, title, content }, { where: { id } });
    res.json(updatedPost);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.json({ message: 'Пост удален успешно' });
  }
}

module.exports = new PostController();
