import axios from 'axios'

export async function POST(request: Request) {
  const formData = await request.formData()

  let uploadResponse
  try {
    uploadResponse = await axios.post(
      'https://s.gptcarrot.com/uploadFile',
      formData
    )
  } catch (error) {
    console.error('Upload failed: ', error)
  }

  const headers = {
    'Content-Type': 'application/json'
  }
  return new Response(JSON.stringify(uploadResponse?.data), { headers })
}
