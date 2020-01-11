const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()
app.use(cors())

const upload = multer({
  dest: './uploads'
})

const PORT = '5000' || process.env.PORT


app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file })
})

app.listen(PORT, () => console.log(`Server has ears and eyes on ${PORT}`))