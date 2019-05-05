import React from 'react'
import PostList from './PostList'
import comment from '../fixtures'

function App() {
    return (
        <div>
            <h1>Creation a Post</h1>
            <PostList comment = {comment} />
        </div>
    )
}

export default App
