import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//router
import postRoutes from './routes/posts.js'

const app = express()

//middleware
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://davetoro:davetoro1234@mernproject.16fi7.mongodb.net/mernproject?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

//mongoose and server
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)