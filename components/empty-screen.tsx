import InstructionImg from './instruction'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4" id="instructionScreen">
      <div className="rounded-lg border bg-background p-6">
        <InstructionImg className="w-full h-auto" />
      </div>
    </div>
  )
}
