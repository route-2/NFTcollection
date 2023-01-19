import { StatusError } from "@hashgraph/sdk";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload); // keeps all posts except the ones where the id == action.payload
    case "FETCH_BY_SEARCH":
         return {...posts, posts: action.payload}
               
      case "UPDATE":
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
      case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      case "FETCH_POST":
      return {...posts, post: action.payload}
    case "FETCH_ALL":
      return action.payload;
      case "COMMENT":
        return {
          ...posts,
          posts: posts.posts.map((post) => {
            if (post._id == +action.payload._id) { // return posts which recieved a comment
              return action.payload;
            }
            return post;
          }),
        };
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
export default reducer;
