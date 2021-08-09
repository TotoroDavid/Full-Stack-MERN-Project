import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'
//component
import Post from './Post/Post'
//styles
import useStyles from './styles'

const Posts = () => {

    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)

    return (
        !Posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {
                    posts.map(post => (
                        <Grid key={post._id} item xs={12} sm={6} >
                            <Post />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
