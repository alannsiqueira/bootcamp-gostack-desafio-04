import React, { Component } from 'react';

import Post from './Post'
import posts from '../fake-data';

export default class PostList extends Component {
    state = { posts }

    render() {
        return (
            <ul className="post-list">
                {
                    this.state.posts.map(post =>
                        <li key={post.id}> <Post post={post} /> </li>
                    )
                }
            </ul >
        )
    }
}
