import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(
    <Post 
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments} />, 
    document.getElementById('root'));
