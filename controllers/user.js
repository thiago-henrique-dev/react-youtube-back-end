import { createError } from '../error.js'
import User from "../models/User.js"


export const update = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try{
          const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:res.body
          })
          res.status(200).json(updateUser)
        } catch(err){
          next(err)
        }
    } else {
        return next(createError(403, "You can update only your account!"))
    }
}
export const deleteUser = (req, res) => {
    
}
export const getUser = (req, res) => {
    
}
export const subscribe = (req, res) => {
    
}
export const unsubscribe = (req, res) => {

}
export const like = (req, res) => {
    
}
export const dislike = (req, res) => {
    
}
