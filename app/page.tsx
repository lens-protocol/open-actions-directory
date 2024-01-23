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
      flex w-full flex-col 
      bg-[#FAFAFA] pb-12 pt-14 px-6
      sm:pt-28
      md:pb-0 md:bg-[transparent] md:flex-row md:px-8 
      xl:w-[1167px] xl:px-0
      '
      >
        <div
          className='
          w-full
          lg:w-[565px]
          '
        >
          <div className='
            flex items-center justify-center
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
            <p className='
            ml-3 text-[#848483] font-[400] font-[15px]
            '>Open Actions</p>
          </div>
          <div
            className='
            block flex justify-center items-center
            md:hidden
            '
          >
            <Image 
              src="/png/hero.png"
              width={5000}
              height={3900}
              alt="Lens Smart Posts"
              className='
              ml-[-35px] mt-8
              '
            />
          </div>
          <h1
            className='
            text-[#343433] text-[44px] font-bold
            tracking-[-0.020em] leading-[50px]
            pr-5 mt-0
            md:mt-7
            lg:text-[48px] lg:leading-[52.8px] lg:pr-0
            '
          >
            Smart Posts
          </h1>
          <p
             className='
             block pr-16 mt-5 
             text-[17px] text-[#858585] font-[400] tracking-[-0.22px]
             md:hidden
             '
          >
            Smart Posts bring the power of smart contracts into the feed. Engage a wider audience with interactive web3 experiences seamlessly integrated across the Lens ecosystem.
          </p>
          <p
            className='
            hidden pr-10 mt-5
            text-[#858585] font-[400] tracking-[-0.22px]
            md:block
            '
          >
            Smart Posts bring the power of smart contracts into the feed. Engage a wider audience with interactive web3 experiences seamlessly integrated across the Lens ecosystem.
          </p>
          <div className='mt-7 flex'>
            <Link
              href="https://docs.lens.xyz/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener noreferrer"
              className='
              flex items-center rounded-full
              bg-[#343433] px-[16px] py-[11px]
              text-sm text-white
              hover:bg-black transition duration-300
              '
            >
               <p
                 className='
                 text-base font-[500]
                 '
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
              href="https://github.com/lens-protocol/verified-modules"
              target="_blank"
              rel="noopener noreferrer"
              className='
              flex items-center
              ml-3 px-[16px] py-[11px] rounded-full
              cursor-pointer bg-[#F0F0F0]
              text-sm text-black
              hover:bg-[#D9D9D9] transition duration-300
              '
            >
              <p
                className='
                font-[500] text-[#343433] text-base
                '
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
          hidden md:block flex justify-center items-center'
        >
          <Image 
            src="/png/hero.png"
            width={630}
            height={401}
            alt="Lens Smart Posts"
            placeholder="blur"
            blurDataURL={`/svg/hero.svg`}
            className='
            ml-[-40px] mt-8 lg:ml-0 lg:mt-[-40px] 
            '
          />
        </div>
      </div>
      <Actions />
    </main>
  )
}
