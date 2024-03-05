import { useState, useEffect } from 'react';
import axios from 'axios'; // Импортируем Axios

function usePosts() {
    const [posts, setPosts] = useState([]);
    const [newPostData, setNewPostData] = useState({ user: '', title: '', content: '' });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:1777/api/post'); // Используем Axios для отправки GET запроса
            setPosts(response.data); // Устанавливаем данные в стейт
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const createPost = async () => {
        try {
            const response = await axios.post('http://localhost:1777/api/post', newPostData); // Используем Axios для отправки POST запроса
            setPosts([...posts, response.data]); // Добавляем новый пост в массив постов
            setNewPostData({ user: '', title: '', content: '' }); // Очищаем данные формы после создания поста
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return {
        posts,
        newPostData,
        setNewPostData,
        createPost,
        PostForm: (
            <div>
                <h2>Create New Post</h2>
                <input
                    type="text"
                    placeholder="User"
                    value={newPostData.user}
                    onChange={(e) => setNewPostData({ ...newPostData, user: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={newPostData.title}
                    onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
                />
                <textarea
                    placeholder="Content"
                    value={newPostData.content}
                    onChange={(e) => setNewPostData({ ...newPostData, content: e.target.value })}
                ></textarea>
                <button onClick={createPost}>Create Post</button>
            </div>
        ),
    };
}

export default usePosts;
