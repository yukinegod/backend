import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import router from './config/routes.js'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    methods: ['GET', 'POST']
  })
)

app.use(router)

// Server start
;(() => {
  try {
    app.listen(process.env.PORT, (e) => {
      e
        ? console.log(`Server error!\n\n${e}`)
        : console.log(`Server listen ${process.env.PORT}`)
    })

    mongoose
      .connect(process.env.DB_LINK)
      .then(() => console.log(`DB connected`))
      .catch((e) => console.log(`DB error!\n\n${e}`))
  } catch (e) {
    console.log(`Starting error!\n\n${e}`)
  }
})()
