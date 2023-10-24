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
    <div className='flex flex-wrap flex-1'>
      {
        actions.map((action, index) => (
          <ActionCard key={index} action={action} />
        ))
      }
    </div>
  )
}