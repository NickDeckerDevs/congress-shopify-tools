import { Request, Response } from 'express'
import { IncomingForm } from 'formidable'











export function upload(req: Request, res: Response) {
  const form = new IncomingForm()

  form.on('file', (field, file) => {

  })

  form.on('end', () => {
    res.json()
  })

  form.parse(req)
}