/* eslint-disable no-unused-vars */
'use strict'
let app = require('express')()
let http = require('http').Server(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(cors())
app.use(bodyParser.json())


app.get('/api/pcd', async (req, res) => {
  try {
    try {
      let _path = 'simple.pcd'
      if (fs.existsSync(_path)) {
        fs.readFile(_path, 'utf8', (err, data) => {
          console.log(data);
          
          res.send(data)
        })
      }
    } catch (e) {
      console.log('error')
    }
  } catch (e) {
    res.status(500).send(e)
  }
})


const port = process.env.PORT || 8081

http.listen(port, () => {
  console.log('server running on port ' + port + ': ')
})
