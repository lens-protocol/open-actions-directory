'use client'

import { useState, useEffect } from 'react'
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Gem, PersonStanding, Code, PackagePlus } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type Action = {
  name: string
  description: string
  type: string
  link?: string
  builder?: string
  bounty?: string
  builder_profile?: string
}

function trimString(string) {
  if (string.length > 75) {
    return string.substring(0, 75) + '...'
  }
  return string
}

export function ActionCard({ action } : { action: Action }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!loaded) return null
  return (
    <Dialog>
      <div className="
        w-full
        sm:w-[calc(50%-10px)]
        md:w-[calc(33.3%-10px)]
        xl:w-[290px]
        mx-[5px] mb-[10px]">
        <Card className="hover:bg-slight hover:text-accent-foreground">
          <DialogTrigger>
            <CardHeader className="space-y-1">
              <CardTitle
                className="text-2xl min-h-[70px]"
              >{action.name}</CardTitle>
              <CardDescription
                className="min-h-[58px]"
              >
                {trimString(action.description)}
              </CardDescription>
            </CardHeader>
          </DialogTrigger>
          <CardContent className="grid gap-4">
              <div className="grid gap-6">
              {
                action.link && action.type === 'action' && (
                  <Button
                    className="w-full"
                    variant="outline"
                    asChild
                  >
                    <Link
                      href={action.link}
                      target="_blank"
                      rel="no-opener"
                    >
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                      Github
                    </Link>
                  </Button>
                )
              }
                {
                  action.type === "rfp" && (
                    <>
                      {
                        action.bounty && (
                          <Button
                          variant="outline"
                          className="w-full"
                          asChild
                        >
                          <Link
                            href="https://airtable.com/app97gNZWvlLHLDur/shr1ghoUxV9DHuuDM"
                            target="_blank"
                            rel="no-opener"
                          >
                          <Gem width="20" className="mr-2" />
                          Bounty ${action.bounty}
                          </Link>
                        </Button>
                        )
                      }
                      {
                        !action.bounty && (
                          <Button
                            variant="outline"
                            className="w-full"
                            asChild
                          >
                            <Link
                              href="https://github.com/lens-protocol/open-actions-directory/blob/main/open_actions_pr_template.md"
                              target="_blank"
                              rel="no-opener"
                            >
                            <PackagePlus width="20" className="mr-2" />
                            Submit
                            </Link>
                          </Button>
                        )
                      }
                    </>
                  )
                }
                </div>
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                  </div>
                  {
                    action.builder_profile && (
                      <Button
                       asChild
                        className="w-full"
                      >
                      <Link
                        href={action.builder_profile}
                        target="_blank"
                        rel="no-opener"
                      >
                        <PersonStanding className="mr-2" />
                        by {action.builder}
                      </Link>
                      </Button>
                    )
                  }
                  {
                    action.type === 'rfp' && (
                      <Button
                        asChild
                        className="w-full"
                      >
                        <Link
                        target="_blank"
                        rel="no-opener"
                        href="https://docs.lens.xyz/v2/docs/creating-a-publication-action">
                          <Code
                            className="mr-2" />
                          <p>Build</p>
                      </Link>
                    </Button>
                    )
                  }
                </>
          </CardContent>
        </Card>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{action.name}</DialogTitle>
          <DialogDescription>
            {action.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}