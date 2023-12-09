import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <div className="border-t">
      <div className='
        py-4 px-10
        flex justify-center
      '>
        <div
          className='
          flex py-5
          flex justify-center
          w-[1167px]
          '
        >
          <div>
            <Image
              src="/svg/lens-grey.svg"
              width={34}
              height={34}
              alt="Lens logo"
            />
          </div>
          <div className='ml-20'>
            <p className='font-medium'>Lens Smart Posts</p>
            <p
              className='mt-1 text-sm text-[#a7a7a7] max-w-[622px] leading-[21px]'
            >
            These contributions are made by the Lens community. Remember, they&apos;re not verified or audited by the Lens Team, integrate at your own risk. We encourage you to thoroughly research and verify the code before fully engaging with it.
            </p>
            <div className='mt-4'>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className='text-sm text-[#a7a7a7] '
              >GitHub</a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className='ml-5 text-sm text-[#a7a7a7] '
              >Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}