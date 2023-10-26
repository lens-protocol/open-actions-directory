import { ActionCard } from '@/components/ui/action-card'
import actions from '../actions.json'

export function Actions() {
  return (
    <div className='
    pt-10 pb-10 flex flex-1 flex-wrap
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
