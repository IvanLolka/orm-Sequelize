  import { useState } from 'react'
  import usePosts from './usePosts'

  function App() {
    const [count, setCount] = useState(0)
    const { posts, PostForm } = usePosts()

    return (
      <>
        {PostForm}
              <h2>Latest Post</h2>
              {posts.length > 0 ? (
                  <div>
                      <p>User: {posts[posts.length - 1].user}</p>
                      <p>Title: {posts[posts.length - 1].title}</p>
                      <p>Content: {posts[posts.length - 1].content}</p>
                  </div>
              ) : (
                  <p>No posts available</p>
              )}
      </>
    )
  }

  export default App
