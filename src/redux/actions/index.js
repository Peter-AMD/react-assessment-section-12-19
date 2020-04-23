import jsonPlaceholder from '../../apis/jsonplaceholder';

export const fetchMembers = () => async dispatch => {
  const members = await jsonPlaceholder.get('/users');

  dispatch({
    type: 'FETCH_MEMBERS',
    payload: members.data,
  });
}

export const fetchPosts = (id) => async dispatch => {
  const posts = await jsonPlaceholder.get(`/posts?userId=${id}`)

  dispatch({
    type: 'FETCH_POSTS',
    payload: posts.data,
  });
}

export const addPost = ({ user, title, body }) => async dispatch => {
  dispatch({
    type: 'FETCHING_DATA',
    payload: true,
  });

  const add = await jsonPlaceholder.post('/posts', { user, title, body });
  
  dispatch({
    type: 'ADD_POST',
    payload: add.data
  });
  dispatch({
    type: 'FETCHING_DATA',
    payload: false,
  });
}

export const deletePost = postId => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${postId}`);
  dispatch({
    type: 'DELETE_POST',
    payload: {
      postId,
    }
  })
}

export const fetchComments = ({ postId, userId }) => async dispatch => {
  const comments = await jsonPlaceholder.get(`comments/${userId}?postId=${postId}`);

  dispatch({
    type: 'FETCH_COMMENTS',
    payload: comments.data,
  })
}