import _ from 'lodash'
import api from '../api/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    //map lodash function and uniq to find the uniq id:
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))

}

export const fetchPosts = () => async dispatch => {
    const response = await api.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}


// We only want to fetch each user one time, for that we'll use memoize from lodash
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await api.get(`/users/${id}`)
//     dispatch({ type: 'FETCH_USER', payload: response.data})
// })

export const fetchUser = id => async dispatch => {
    const response = await api.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data})
}


    






