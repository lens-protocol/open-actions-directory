'use client'

import { Actions } from '@/components/actions'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="
      flex-1 flex flex-col items-center 
    ">
      <div
      className='
      flex px-8 w-full
      flex-col md:flex-row
      xl:w-[1167px] xl:px-0
      bg-[#FAFAFA] md:bg-[transparent]
      pb-12 md:pb-0
      pt-14
      sm:pt-28
      '
      >
        <div
          className='
          w-full
          lg:w-[565px]
          '
        >
          <div className='
            flex items-center
            justify-center
            sm:justify-start
          '>
            <Image
              src="/svg/logo.svg"
              width={27}
              height={18}
              alt="Smart Posts Directory"
            />
            <p className='ml-2 font-medium text-[#343433]'>Lens</p>
            <div className='ml-4 w-[1px] h-[14px] bg-[#E6E6E6]' />
            <p className='ml-3 text-[#848483] font-light font-[15px]'>Open Actions</p>
          </div>
          <div
            className='
            block
            md:hidden
            flex justify-center items-center'
          >
            <Image 
              src="/svg/hero.svg"
              width={500}
              height={390}
              alt="Hero"
              className='
              ml-[-35px] mt-8
              '
            />
          </div>
          <h1
            className='
            text-[#343433] tracking-[-0.020em]
            text-[44px] leading-[50px] pr-5
            font-bold mt-0
            lg:pr-0
            lg:mt-7 lg:text-[48px] lg:leading-[52.8px]
            '
          >
            Discover and build creative Smart Posts.
          </h1>
          <p
             className='
             block md:hidden
             pr-16 text-[17px]
             text-[#858585] mt-5
             font-[400]
             '
          >
          With Open Actions, developers can 
            build Smart Posts. Interactions with 
            any external smart contract in a 
            Lens publication.
          </p>
          <p
            className='
            hidden md:block
            pr-10
            text-[#858585] mt-5
            font-[400]
            '
          >
            With Open Actions, developers can build Smart Posts. Interactions with any external smart contract in a Lens publication. Dive into Lens posts and unleash the full power of Web3 for innovative content creation.
          </p>
          <div className='mt-7 flex'>
            <Link
              href="https://docs.lens.xyz/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener noreferrer"
              className='
              bg-[#343433]
              rounded-full text-white px-[16px] py-[11px]
              text-sm
              flex items-center
              '
            >
               <p
                 className='text-base'
               >View Docs</p>
               <Image
                src={'/svg/arrow-white.svg'}
                alt="Arrow"
                height={14}
                width={14}
                className='ml-1'
              />
            </Link>
            <Link
              href="https://docs.lens.xyz/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener noreferrer"
              className='
              ml-3
              bg-[#F0F0F0]
              rounded-full text-black px-[16px] py-[11px]
              text-sm
              flex items-center
              hover:bg-[#D9D9D9]
              cursor-pointer
              '
            >
              <p
                className='text-[#343433] text-base'
              >Submit Post</p>
              <Image
                src={'/svg/arrow.svg'}
                alt="Arrow"
                height={14}
                width={14}
                className='ml-1'
              />
            </Link>
          </div>
        </div>
        <div
          className='
          hidden md:block
          flex justify-center items-center'
        >
          <Image 
            src="/svg/hero.svg"
            width={500}
            height={390}
            alt="Hero"
            className='
            ml-[-40px] mt-8
            lg:ml-0 lg:mt-0
            '
          />
        </div>
      </div>
      <Actions />
    </main>
  )
}
