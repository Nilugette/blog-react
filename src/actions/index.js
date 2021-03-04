import api from '../api/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await api.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}