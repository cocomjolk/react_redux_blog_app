import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch ({ type: 'FETCH_POSTS', payload: response.data })
  };
};


//ES6 export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch)
  }
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  //ES6 const response = await jsonPlaceholder.get(`/users/`${id});
  const response = await jsonPlaceholder.get('/users/' + id);

  dispatch ({ type: 'FETCH_USER', payload: response.data })
});
