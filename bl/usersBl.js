const { userModel } = require("../models/userModel");

const getUsersByNameAndPassword = async (name,password) => {
    const users = await userModel.find({ name: name ,password:password}).select({ _id: 0 }).exec()
    return users;
}
const getAllUser = async (name) => {

    const users = await userModel.find({}).select({ _id: 0 }).exec()
    return users;
}
module.exports = {
    getUsersByNameAndPassword,
    getAllUser
}