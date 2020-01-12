import express from 'express'
import { upload } from './upload'
import cors from 'cors'




const PORT = 3000
const server = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
server.use(cors(corsOptions))

server.post('upload', upload)

server.listen(PORT, () => {
  console.log(`Server started eyeballing ${PORT} donuts, http://localhost:${PORT}`)
})