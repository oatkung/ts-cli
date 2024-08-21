import fs from 'fs'
import axios from 'axios'

export const downloadFile = async (url: string, savePath: string) => {
  const writer = fs.createWriteStream(savePath)
  const response = await axios.get(url, {
    responseType: 'stream'
  })
  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}