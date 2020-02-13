import React, { Component } from "react";
import axios from '../../../axios';
import { /*Link,*/ Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatePosts});
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        // this.props.history.push('/' + id);
        this.props.history.push({pathname: '/posts/' + id});
    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Deu ruim</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return(
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post  
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link> 
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;