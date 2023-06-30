const initialState = {
    blogs: []
  };
  
  export const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BLOGS_SUCCESS':
        return {
          ...state,
          blogs: action.payload
        };
      default:
        return state;
    }
  };
  