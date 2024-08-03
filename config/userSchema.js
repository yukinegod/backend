import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true
    },
    username: {
      type: String,
      unique: true
    },
    balance: {
      type: Number,
      required: true
    },
    experience: {
      type: Number,
      required: true
    },
    userLvl: {
      type: Number,
      required: true
    },
    userTheme: {
      type: String,
      required: true
    },
    coinsPerClick: {
      type: Number,
      required: true
    },
    multiplyClicksLvl: {
      type: Number,
      required: true
    },
    multiplyExperienceLvl: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const User = model('User', userSchema)
export default User
