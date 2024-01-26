'use client'

import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MobileNavigationMenu } from '@/components/ui/mobile-menu'

export default function Nav() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let fill
  switch (theme) {
    case 'light':
      fill = 'black'
      break
    case 'dark':
      fill = 'white'
    case 'system':
      fill = systemTheme === 'dark' ? 'white' : 'black'
    default:
      fill = 'white'
  }

  if (!mounted) {
    fill = 'white'
  }

  return (
    <div>
      <div className="border-b">
        <div className="px-4 md:px-8 py-3 flex flex-1">
          <div className="lg:hidden">
            <MobileNavigationMenu />
          </div>
          <div className="hidden lg:flex flex-row items-center">
            <Link href="/">
              <div className="flex flex-row justify-center items-center">
                <Icon width="28px" height="28px" fill={fill} />
                <p className="text-sm font-semibold">
                  Lens Smart Posts Library
                </p>
              </div>
            </Link>
            <a
              href="https://docs.lens.xyz/v2/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener"
            >
              <p className="hover:text-foreground transition duration-300 text-muted-foreground text-sm ml-5">
                Build a Smart Post
              </p>
            </a>
            <a
              href="https://github.com/lens-protocol/open-actions-directory/blob/main/open_actions_pr_template.md"
              target="_blank"
              rel="noopener"
            >
              <p className="text-muted-foreground text-sm ml-5 hover:text-foreground transition duration-300">
                Submit an Smart Post
              </p>
            </a>
            <a
              href="https://docs.lens.xyz/v2/docs/what-is-lens"
              target="_blank"
              rel="noopener"
            >
              <p className="hover:text-foreground transition duration-300 text-muted-foreground text-sm ml-5">
                Lens Docs
              </p>
            </a>
            <a
              href="https://t.me/+2j1jirznPt0zMmFh"
              target="_blank"
              rel="noopener"
            >
              <p className="hover:text-foreground transition duration-300 text-muted-foreground text-sm ml-5">
                Lens Dev Garden
              </p>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
