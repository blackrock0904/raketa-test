import React from 'react';
import { v4 } from 'uuid';
import { Post } from './Post';

export const Posts = ({ store }) => {
  const pattern = new RegExp(store.pattern);
  let filtredPosts;
  if (store.pattern !== '') {
    filtredPosts = store.posts.filter(post => {
      return !!post.title.match(pattern);
    })
  } else {
    filtredPosts = [...store.posts];
  }
  return (
    <div>
      {filtredPosts.map(post => {
        return <Post key={v4()} post={post} user={store.users.find(user => user.id === post.userId)} />
      })}
    </div>
  );
}
