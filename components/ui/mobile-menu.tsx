"use client"

import * as React from "react"
import Link from "next/link"
import { Icon } from "@/components/Icon"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MobileNavigationMenu() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let fill
  switch(theme) {
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className='flex flex-row justify-center items-center'>
              <Icon width="28px" height="28px" fill={fill} />
              <p
                className="text-sm font-semibold"
              >Lens Open Actions Directory
              </p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icon width="28px" height="28px" fill={fill} />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Open Actions Directory
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Enable any external smart contract-action on a Lens publication.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://docs.lens.xyz/v2/docs/what-is-lens" title="Build">
              Build an Open Action.
              </ListItem>
              <ListItem href="https://github.com/lens-protocol/open-actions-directory/blob/main/open_actions_pr_template.md" title="Submit">
                { /* eslint-disable react/no-unescaped-entities */ }
                Submit an Open Action that You've Created.
              </ListItem>
              <ListItem href="https://docs.lens.xyz/v2/docs/what-is-lens" title="Docs">
                Check out the Lens Developer Documentation.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
