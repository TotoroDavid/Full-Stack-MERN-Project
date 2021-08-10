import * as api from '../api';

//Actions_Creators

//-getPosts
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

//-createPost
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

//-updatePost
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}