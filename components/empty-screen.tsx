import Image from 'next/image'
import instruction from '@/public/instruction.jpg'
import { Button } from './ui/button'
import { fontDisplay } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4" id="instructionScreen">
      <div className="rounded-lg border bg-background p-6">
        <Image
          src={instruction}
          width={512}
          height={512}
          className="w-1/4 rounded-full self-center m-auto"
          alt="How can I help you today?"
        />
        <div className="flex justify-center pt-4">
          <p className={'text-2xl'}>How can I help you today?</p>
        </div>
      </div>
    </div>
  )
}
