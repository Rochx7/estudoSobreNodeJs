const express = require('express')
const UserModel = require('../src/modules/user.model')

const app = express()

app.use(express.json())

app.get('/home', (req, res) => {
  res.contentType('application/html')
  res.status(200).send('<h1>Fala papai</h1>')
})

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({})

    res.status(200).send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

const port = 8080

app.listen(port, () => console.log(`rodando com express na port ${8080}`))
