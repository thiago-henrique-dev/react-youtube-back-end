import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/users.js'
import AuthRoutes from './routes/auth.js'


const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected to db");
    }).catch(err=> {
        throw err;
    })
}
app.use(express.json())
app.use('/api/auth', AuthRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)

app.listen(8800, () => {
    connect()
    console.log("connected!")
})