export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return action.payload;
    default:
      return state;
  }
}