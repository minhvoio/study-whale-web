//@ts-nocheck
export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('fileInput')
  let fileName = file.name

  // Create new form data and append the file
  let uploadData = new FormData()
  uploadData.append('file', file, fileName)

  // Send POST request to 0x0.st
  let uploadResponse = await fetch('https://0x0.st', {
    method: 'POST',
    body: uploadData
  })

  // Get the text response from 0x0.st
  let uploadResult = await uploadResponse.text()

  // Check if the upload was successful
  if (uploadResponse.ok) {
    // Return the file link in the response
    const body = { fileName: fileName, fileLink: uploadResult.trim() }
    const headers = { 'Content-Type': 'application/json' }
    return new Response(JSON.stringify(body), { headers })
  } else {
    // Return an error message if the upload failed
    return new Response('File upload failed', { status: 500 })
  }
}
