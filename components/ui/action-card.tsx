'use client'

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Action = {
  name: string
  description: string
  type: string
  link: string
}

export function ActionCard({ action } : { action: Action }) {
  return (
    <div className="
      w-full
      sm:w-[calc(50%-10px)]
      md:w-[calc(33.3%-10px)]
      xl:w-[290px]
      mx-[5px] mb-[10px]">
      <Card className="hover:bg-slight hover:text-accent-foreground">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{action.name}</CardTitle>
          <CardDescription>
            {action.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {
            action.type === "action" && (
              <div className="grid gap-6">
                <Button variant="outline">
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
                </Button>
              </div>
            )
          }
          {
            action.type === "rfp" && (
              <div className="grid gap-6">
                <Button
                  variant="outline"
                  className="w-full"
                >Request bounty.</Button>
              </div>
            )
          }
          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div> */}
        </CardContent>
        {/* <CardFooter>
          <Button className="w-full">Create account</Button>
        </CardFooter> */}
      </Card>
    </div>
  )
}