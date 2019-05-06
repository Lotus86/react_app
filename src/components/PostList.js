import React from 'react'
import Post from './Post'

export default function PostList({comment}) {
    return (
        <ul>
            <li> <Post comment = {comment[0]} /> </li>
            <li> <Post comment = {comment[1]} /> </li>
        </ul>
    )
}
