import { ActionCard } from '@/components/ui/action-card'

const actions = [
  {
    type: "action",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
    {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
  {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
  {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
  {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
  {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  },
  {
    type: "rfp",
    name: "Basic action",
    description: "Basic example of Open Action on Polygon",
    link: "https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/create-account.tsx"
  }
]

export function Actions() {
  return (
    <div className='
    pt-10 pb-32 flex flex-1 flex-wrap
    px-2 sm:px-5 xl:px-0
    w-full sm:w-full xl:w-[1200px]
    '>
      {
        actions.map((action, index) => (
          <ActionCard key={index} action={action} />
        ))
      }
    </div>
  )
}
