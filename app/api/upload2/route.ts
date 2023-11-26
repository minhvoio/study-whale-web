import axios from 'axios'

export async function POST(request: Request) {
  const formData = await request.formData()

  // Send POST request to transfer.sh
  let uploadResponse
  try {
    uploadResponse = await axios.post('https://transfer.sh', formData)
  } catch (error) {
    console.error('Upload failed: ', error)
  }

  // Get the text response from transfer.sh
  let uploadResult = uploadResponse?.data

  // Prepare the headers for the response
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }

  // Check if the upload was successful
  if (uploadResponse && uploadResponse.status === 200) {
    // Return the file link in the response
    const body = { fileLink: uploadResult.trim() }
    return new Response(JSON.stringify(body), { headers })
  } else {
    // Return an error message if the upload failed
    return new Response('File upload failed', { status: 500, headers })
  }
}
