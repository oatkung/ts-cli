import axios from 'axios'
import { Signale } from 'signale'
import fs from 'fs'
import path from 'path'
import { downloadFile } from '../helpers/http'

export default {
  async download (url: string) {
    const signale = new Signale();
    const storagePath = process.env.STORAGE_PATH as string
    const urls = [
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg'
    ]
    signale.info('Begin download')
    signale.time('download')
    
    let index = 0
    for (const url of urls) {
      signale.await(`[%d/${urls.length}] - Process`, index + 1)
      const filename = path.resolve(storagePath, `test_${index}.jpg`)
      await downloadFile(url, filename)
      index++
    }

    signale.timeEnd('download')
    signale.complete('Download Completed')
  }
}