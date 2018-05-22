import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>Authored by {this.props.author}</h3>
                <p>{this.props.body}</p>
                <h4>Comments:</h4>
                <p>{this.props.comments[0]}</p>
                <p>{this.props.comments[1]}</p>
                <p>{this.props.comments[2]}</p>
                <p>{this.props.comments[3]}</p>
            </div>
        )
    }
}

export default Post
