const reducer = (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload); // keeps all posts except the ones where the id == action.payload
    case "FETCH_BY_SEARCH":
         return action.payload
               
      case "UPDATE":
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
      case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
export default reducer;
