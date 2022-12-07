import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs/promises'
import streamifier from 'streamifier'
import cloudinary from '../../../lib/cloudinary'

export const config = {
  api: {
    bodyParser: false
  }
}

const readFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable()
  form.parse(req, async (err, fields, files: any) => {
    
    const oldPath = files.file.filepath;
    const rawData = await fs.readFile(oldPath);
    const stream = cloudinary.uploader.upload_stream({
      folder: `posts/${fields.id}`
    }, function(error, result) {
      console.log({ error, result })
      if (error) return res.status(500).json({ error })
      return res.json({ success: true, result })
    })
    streamifier.createReadStream(rawData).pipe(stream)
  })
  
}

const handler: NextApiHandler = async (req, res) => {
  // try {
  //   await fs.readdir(path.join(process.cwd() + '/public', '/images'))
  // } catch (err) {
  //   await fs.mkdir(path.join(process.cwd() + '/public', '/images'))
  // }
  // await readFile(req, true)
  await readFile(req, res)
}

export default handler