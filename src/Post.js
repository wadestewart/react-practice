import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        let comments = this.props.comments.map((comment, index) => (
            <Comment message={comment} key={index} />
        ))
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Authored by {this.props.author}</p>
                <div>
                    <p>{this.props.body}</p>
                </div>
                <h3>Comments:</h3>
                {comments}
            </div>
        )
    }
}

export default Post
