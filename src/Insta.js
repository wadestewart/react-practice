import React, { Component } from 'react'
import Post from './Post'
import Comment from './Comment'

const post = {
    title: 'Post 1',
    author: 'Yours, truly',
    body: 'Check me out, all posting and junk',
    comments: [
        'Thumbs up!',
        'Thumbs down!',
        'Undecided',
        'Suck it dry!'
    ]
}

class Insta extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post 
                    title={post.title}
                    author={post.author}
                    body={post.body}
                    comments={post.comments} />
            </div>
        )
    }
}

export default Insta
