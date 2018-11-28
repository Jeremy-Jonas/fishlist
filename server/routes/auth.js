const express = require('express')

const users = require('../db/users')
const hashing = require('../auth/hashing')
const tokens = require('../auth/tokens')

const router = express.Router()

router.post('/login', validateLogin, checkUser, issueToken)
router.post('/register', validateRegistration, createUser, issueToken)
router.use(errorHandler)

function checkUser (req, res, next) {
  const { username, password } = req.body

  users.getByUsername(username)
    .then(({ id, hash }) => {
      res.locals.userId = id
      return hashing.verify(hash, password)
    })
    .then(verified => {
      if (!verified) {
        next(new Error('Password incorrect.'))
      }

      next()
    })
    .catch(err => next(err))
}

function createUser (req, res, next) {
  users.create(req.body)
    .then(([ id ]) => {
      res.locals.userId = id
      next()
    })
    .catch(err => {
      let message = 'Unknown error while creating user.'
      if (err.message.includes('UNIQUE constraint failed')) {
        message = 'User already exists.'
      }

      next(new Error(message))
    })
}

function errorHandler (err, req, res, next) {
  if (!err) {
    return next()
  }

  res.status(401).json({ ok: false, error: err.message })
}

function issueToken (req, res, next) {
  const { userId } = res.locals

  const token = tokens.create(userId)
  res.status(200).json({ ok: true, token })
}

function validateLogin (req, res, next) {
  const { username, password } = req.body

  if (!username) {
    return next(new Error('No username provided.'))
  }

  if (!password) {
    return next(new Error('No password provided.'))
  }
}

function validateRegistration (req, res, next) {
  const { username, password, email } = req.body

  if (!username) {
    return next(new Error('No username provided.'))
  }

  if (!password) {
    return next(new Error('No password provided.'))
  }

  if (!email) {
    return next(new Error('No email provided.'))
  }
}

module.exports = router

