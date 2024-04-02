const { UserModel } = require('../models/userModel')

class User {
  constructor (username, password, role) {
    this.username = username
    this.password = password
    this.role = role
  }

  async setId () {
    const usersList = await UserModel.find({})
    const usersId = usersList.map(p => parseInt(p.id))
    this.id = Math.max.apply(this, usersId) + 1 | 0
  }

  async save () {
    const findUser = await UserModel.findOne({ id: this.id }).select({ _id: 0 }).exec()
    if (findUser != null) { return false }
    await this.setId()
    const user = new UserModel({
      id: parseInt(this.id),
      name: this.name,
      password: this.password,
      role: this.role
    })

    await user.save()
    return true
  }
}

module.exports = User
