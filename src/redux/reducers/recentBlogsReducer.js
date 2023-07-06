const initialState = {
  recent_blogs: [],
  loading: true,
};

export const recentBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECENT_BLOGS_SUCCESS':
      return {
        ...state,
        recent_blogs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
