import User from './userSchema.js'

const userController = {
  login: async (req, res) => {
    console.log(req.body)
    try {
      const user = await User.findOne({ userId: req.body.userId })

      if (!user) {
        const newUser = new User({
          userId: req.body.userId,
          username: `@${req.body.username}`,
          balance: 0,
          experience: 0,
          userLvl: 1,
          userTheme: `#a974ff`,
          coinsPerClick: 1,
          multiplyClicksLvl: 1,
          multiplyExperienceLvl: 1
        })

        await newUser.save()

        return res.status(200).json({
          user: {
            userId: newUser.userId,
            username: newUser.username,
            balance: newUser.balance,
            experience: newUser.experience,
            userLvl: newUser.userLvl,
            userTheme: newUser.userTheme,
            coinsPerClick: newUser.coinsPerClick,
            multiplyClicksLvl: newUser.multiplyClicksLvl,
            multiplyExperienceLvl: newUser.multiplyExperienceLvl
          }
        })
      }

      return res.status(200).json({
        user: {
          userId: user.userId,
          username: user.username,
          balance: user.balance,
          experience: user.experience,
          userLvl: user.userLvl,
          userTheme: user.userTheme,
          coinsPerClick: user.coinsPerClick,
          multiplyClicksLvl: user.multiplyClicksLvl,
          multiplyExperienceLvl: user.multiplyExperienceLvl
        }
      })
    } catch (e) {
      console.log(`Server /login route error!\n\n${e}`)
    }
  },
  updateCoinsAndExperience: async (req, res) => {
    try {
      const user = await User.findOne({ userId: req.params.userId })

      if (!user) {
        return res.status(200).json({
          error: 'User not found'
        })
      }

      await User.updateOne(
        { userId: req.params.userId },
        { balance: req.body.balance, experience: req.body.experience }
      )

      return res.status(200).json({
        success: 'user updated'
      })
    } catch (e) {
      console.log(`Server /updateCoinsAndExperience route error!\n\n${e}`)
    }
  },
  updateUserLvl: async (req, res) => {
    try {
      const user = await User.findOne({ userId: req.params.userId })

      if (!user) {
        return res.status(404).json({
          error: 'User not found'
        })
      }

      await User.updateOne(
        { userId: req.params.userId },
        { userLvl: req.body.userLvl, experience: req.body.experience }
      )

      return res.status(200).json({
        success: 'Lvl updated',
        currentLvl: user.userLvl + 1
      })
    } catch (e) {
      console.log(`Server /updateUserLvl route error!\n\n${e}`)
    }
  }
}

export default userController
