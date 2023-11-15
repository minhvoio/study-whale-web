import axios from 'axios'
import FormData from 'form-data'

export async function POST(req: any) {
  // Assuming the file is attached to the request as 'file'
  const file = req.files.file

  // Create a new FormData instance
  const formData = new FormData()
  formData.append('file', file.data, file.name)

  try {
    // Post the file to file.io with an expiration of 24 hours
    const response = await axios.post('https://file.io', formData, {
      params: {
        expires: '1d' // Set the file to expire in 1 day
      }
    })

    // Respond with the file link
    return { link: response.data.link }
  } catch (error) {
    throw new Error('An error occurred while uploading the file.')
  }
}
