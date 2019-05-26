import React from 'react'
import PostList from './PostList'
import comment from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div>
            <h1 className="card-title text-md-center">Знакомство с React</h1>
            <PostList comment = {comment} />
        </div>
    )
}

export default App
