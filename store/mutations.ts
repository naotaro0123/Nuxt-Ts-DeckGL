export default {
  SET_USER(state, { post }) {
    state.postIds.push(post.id);
    state.posts = { ...state.posts, [post.id]: post };
  }
};
