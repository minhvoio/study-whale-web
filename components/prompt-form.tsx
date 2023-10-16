import * as React from 'react'
import Textarea from 'react-textarea-autosize'
import { UseChatHelpers } from 'ai/react'

import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { IconArrowElbow, IconFileUpload, IconPlus } from '@/components/ui/icons'
import { AppDispatch } from '@/app/redux/store'
import { useDispatch } from 'react-redux'
import { setFileLink } from '@/app/redux/slicers/fileSlice'

export interface PromptProps
  extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => Promise<void>
  isLoading: boolean
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [fileUploaded, setFileUploaded] = React.useState(false)

  const dispatch = useDispatch<AppDispatch>()

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      setFileUploaded(false)
      fileInputRef.current.click()
    }
  }

  const handleFileInputOnChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileUploaded(true)

      const formData = new FormData()
      formData.append('fileInput', file)

      // const fileIOLink = 'https://file.io'
      // const localLink = 'http://localhost:4000/uploadFile'
      const excieLink = 'https://s.excie.org/uploadFile'

      const response = await fetch(excieLink, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const jsonResponse = await response.json()
        const fileLink = jsonResponse.fileLink
        console.log(fileLink)
        dispatch(setFileLink(fileLink))
      } else {
        console.error('Upload failed')
      }
    }
  }

  const handleButtonClickToHideInstructionScreen = () => {
    const instructionScreen = document.getElementById('instructionScreen')
    instructionScreen?.style.setProperty('display', 'none')
  }

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        if (!input?.trim()) {
          return
        }
        setInput('')
        await onSubmit(input)
      }}
      ref={formRef}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="To get the best answer, please ask in English."
          spellCheck={false}
          className="min-h-[60px] w-full resize-none bg-transparent pr-14 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 top-4 sm:right-4 space-x-3">
          <Button
            type="button"
            size="icon"
            id="fileUploadButton"
            style={
              fileUploaded
                ? {
                    backgroundColor: '#2ecc71',
                    color: '#fff',
                    boxShadow: 'none'
                  }
                : {
                    backgroundColor: '#E4F0FB',
                    color: '#2a5deb',
                    boxShadow: 'none'
                  }
            }
            onClick={handleFileUploadClick}
            className="rounded-full"
          >
            <IconFileUpload />
            <span className="sr-only">Send file</span>
          </Button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileInputOnChange}
            accept=".xlsx, .xls, .csv"
          />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ''}
                style={{ backgroundColor: '#2a5deb' }}
                className="rounded-full"
                onClick={handleButtonClickToHideInstructionScreen}
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
