import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Comment
