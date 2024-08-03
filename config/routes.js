import { Router } from 'express'
import userController from './userController.js'

const router = Router()

router.post('/login', userController.login)
router.post(
  '/updateCoinsAndExperience/:userId',
  userController.updateCoinsAndExperience
)
router.post('/updateUserLvl/:userId', userController.updateUserLvl)

export default router
