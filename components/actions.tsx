import { ActionCard } from '@/components/ui/action-card'
import actions from '../actions.json'

export function Actions() {
  const socialFiActions = actions.filter(
    (action) => action.tag && action.tag === 'SocialFi'
  )
  const defiActions = actions.filter(
    (action) => action.tag && action.tag === 'DeFi'
  )

  return (
    <div
      className="
      mt-6 px-6
      md:mt-0
      xl:px-0
      "
    >
      <div
        className="
      mt-6
      md:mt-12
      lg:mt-20
      "
      >
        <p
          className="
          text-[#343433] text-[19px] font-semibold"
        >
          SocialFi
        </p>
        <div
          className="
          mt-4 pb-10 grid gap-6 w-full
          sm:grid-cols-2
          xl:w-[1167px] xl:grid-cols-3 xl:px-0
        "
        >
          {socialFiActions.map((action, index) => (
            <ActionCard key={index} action={action} />
          ))}
        </div>
        <p
          className="
          text-[#343433] text-[19px] font-semibold
          "
        >
          DeFi
        </p>
        <div
          className="
          mt-4 pb-10 grid gap-6 w-full
          sm:grid-cols-2
          xl:w-[1167px] xl:grid-cols-3 xl:px-0
        "
        >
          {defiActions.map((action, index) => (
            <ActionCard key={index} action={action} />
          ))}
        </div>
      </div>
    </div>
  )
}
