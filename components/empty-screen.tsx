import InstructionImg from './instruction'
import Image from 'next/image'
import instruction from '@/public/instruction.png'
import { Button, buttonVariants } from './ui/button'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4" id="instructionScreen">
      <div className="rounded-lg border bg-background p-6">
        <Image
          src={instruction}
          width={1920}
          height={1080}
          alt="Instruction for using the chat"
        />
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1FGrhKZ5idhcdztgDYUW-OwF9Uu2WQdGB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{
                backgroundColor: '#2a5deb',
                marginTop: 24
              }}
            >
              Click để xem video hướng dẫn
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
