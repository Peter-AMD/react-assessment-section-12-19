export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [
        ...state,
        action.payload,
      ];
    case 'DELETE_POST':
      const { postId } = action.payload
      console.log(state.filter(post => post.id !== postId))
      return state.filter(post => post.id !== postId);
    default:
      return state;
  }
}