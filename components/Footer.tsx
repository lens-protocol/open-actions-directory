import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <div className="border-t">
      <div className='p-2 px-10'>
        <div
          className='
          flex-col
          sm:flex-row
          flex justify-center items-center
          '
        >
          <Button
            variant="link"
            className='text-muted-foreground hover:text-foreground'
            asChild
          >
          <Link
            href="https://t.me/+2j1jirznPt0zMmFh"
            target="_blank"
            rel="no-opener"
          >
            <p
              className='text-xs'
            >Join Lens Dev Garden</p>
          </Link>
          </Button>
          <Button
            asChild
            className='text-muted-foreground hover:text-foreground'
            variant="link"
          >
            <Link
              href="https://airtable.com/app97gNZWvlLHLDur/shrWByEVMvQWpcv6w"
              target="_blank"
              rel="no-opener"
            >
              <p className='text-xs'>
              Get notified about new bounties and events.
              </p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}