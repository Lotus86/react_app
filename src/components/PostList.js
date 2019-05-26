import React from 'react'
import Post from './Post/Post'
import './Post/style.css'

export default function PostList({comment}) {
    const commentList = comment.map((comment =>
        <li key={comment.id} className="comment-li"><Post comment = {comment}/></li>))
    return (
        <ul>
            {commentList}
        </ul>
    )
}
