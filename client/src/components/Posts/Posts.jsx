import { useSelector } from 'react-redux'
//component
import Post from "./Post/Post"
//styles
import useStyles from './styles'

const Posts = () => {

    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    console.log(posts);

    return (
        <div>
            <Post />
        </div>
    )
}

export default Posts
