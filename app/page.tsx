import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <p>Hello</p>
    </>
  )
}
