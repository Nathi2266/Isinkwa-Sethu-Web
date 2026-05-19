import { Button } from '@/components/ui/button'

export default function SentryVerifyButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => {
        throw new Error('This is your first error!')
      }}
    >
      Verify
    </Button>
  )
}
