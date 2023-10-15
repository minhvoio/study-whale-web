import { Message, StreamingTextResponse } from 'ai'

import { chatStream } from '@/lib/chatStream'

export const runtime = 'edge'

export async function POST(req: Request) {
  const json = await req.json()
  const { messages } = json as { messages: Message[] }

  const response = await fetch('https://www.chatcsv.co/api/v1/chat', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CHATCSV_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4-0613',
      messages,
      files: [
        'https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv'
      ]
    })
  })

  const stream = await chatStream({
    response,
    onEnd: async content => {}
  })

  return new StreamingTextResponse(stream)
}
