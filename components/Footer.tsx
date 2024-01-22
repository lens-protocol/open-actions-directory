import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <div>
      <div className='
        pt-3
        pb-6
        px-6 lg:px-10
        flex justify-center
      '>
        <div
          className='
          py-5
          flex
          flex items-start
          lg:w-[1167px]
          border-t
          pt-6 md:pt-20 border-[#F0F0F0]
          '
        >
          <Image
            src="/svg/lens-grey.svg"
            width={34}
            height={34}
            alt="Lens logo"
            className='hidden md:block'
          />
          <div className='
          ml-0
          md:ml-20'>
            <p className='
            text-[#343433]
            text-sm
            font-medium'>Lens Smart Posts</p>
            <p
              className='
              mt-3 text-sm text-[#a7a7a7]
              max-w-[622px] leading-[21px]
              font-[400]
              '
            >
            These contributions are made by the Lens community. Remember, they&apos;re not verified or audited by the Lens Team, integrate at your own risk. We encourage you to thoroughly research and verify the code before fully engaging with it.
            </p>
            <div className='mt-4'>
              <a
                href="https://github.com/lens-protocol/open-actions-directory"
                target="_blank"
                rel="noopener noreferrer"
                className='
                font-[400]
                hover:text-[#343433] transition duration-300
                text-sm text-[#a7a7a7] '
              >GitHub</a>
              <a
                href="https://docs.lens.xyz/docs/creating-a-publication-action"
                target="_blank"
                rel="noopener noreferrer"
                className='
                font-[400]
                hover:text-[#343433] transition duration-300
                ml-5 text-sm text-[#a7a7a7]'
              >Documentation</a>
              <a
                href="https://t.me/+2j1jirznPt0zMmFh"
                target="_blank"
                rel="noopener noreferrer"
                className='
                font-[400]
                hover:text-[#343433] transition duration-300
                ml-5 text-sm text-[#a7a7a7] '
              >Dev Garden</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}