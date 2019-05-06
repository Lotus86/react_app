import React from 'react'
import Post from './Post'

export default function PostList({comment}) {
    const commentList = comment.map((comment => <li key={comment.id}><Post comment = {comment}/></li>))
    return (
        <ul>
            {commentList}
        </ul>
    )
}
