"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Action = {
  name: string;
  description: string;
  type: string;
  hero: string;
  tag: string;
  link?: string;
  builder?: string;
  bounty?: string;
  height: number;
  builder_profile?: string;
  width: number;
  videoLink?: string;
  figmaLink?: string;
  externalSrc?: string;
};

export function ActionCard({ action }: { action: Action }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <div
          className="
          mt-[5px] mb-[10px] w-full
          md:mb-[40px]
          "
        >
          <Card
            className="
            bg-[#fbfaf9] rounded-[8px] flex justify-center content-start h-[192px] overflow-hidden border-0
            [&>_img]:hover:scale-[1.03] transition duration-300
            shadow-none       
          "
          >
            {!!action.externalSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={action.externalSrc}
                alt={action.name}
                className="object-contain w-[540px] h-[278px] transition duration-200"
              />
            ) : (
              <Image
                width={540}
                height={278}
                src={`/png/${action.hero}`}
                alt={action.name}
                style={{ objectFit: "contain" }}
                className="
            transition duration-200 
            "
              />
            )}
          </Card>
          <div className="mt-5">
            <div className="flex items-center">
              <p
                className="
                text-[#343433]
                font-[500]"
              >
                {action.name}
              </p>
              {action.type === "action" && (
                <Image
                  src={`https://raw.githubusercontent.com/lens-protocol/open-actions-directory/d6c6423563da1db8d93d58ccfb5c7974901821a8/public/svg/built.svg`}
                  width={40}
                  height={19}
                  alt="Built"
                  className="ml-2"
                />
              )}
            </div>

            <p
              className="
              font-[400] text-[#848281] text-sm mt-2
              "
            >
              {action.description}
            </p>
          </div>
        </div>
      </DialogTrigger>
      {/* Active Dialog */}
      <DialogContent
        className="
        border-0 p-0 pt-24 w-full h-screen rounded-0
        sm:rounded-lg sm:pt-0
        md:h-[591px] md:min-w-[480px]
        lg:min-w-[673px]
        "
      >
        <div
          className="
          mx-6 flex justify-center rounded-t-lg
          bg-[#fbfaf9]
          sm:mx-0
          "
        >
          {!!action.externalSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={action.externalSrc}
              alt={action.name}
              className="object-contain w-[540px] h-[278px] transition duration-200"
              style={{
                maxHeight: "278px",
                display: "block",
                objectFit: "contain",
              }}
            />
          ) : (
            <Image
              src={action.externalSrc ?? `/png/${action.hero}`}
              width={540}
              height={278}
              alt={action.name}
              style={{
                maxHeight: "278px",
                display: "block",
                objectFit: "contain",
              }}
            />
          )}
        </div>
        <div
          className="
          flex flex-col pt-6 pb-8 px-8 pt-2
          rounded-b-lg  bg-white"
        >
          <div className="flex">
            <div className="flex flex-1 ">
              <p
                className="
                font-semibold text-[19px] inline mr-2
                "
              >
                {action.name}
              </p>
              {action.type === "idea" && (
                <Image
                  src="/svg/idea-badge.svg"
                  width={40}
                  height={20}
                  alt="Idea"
                  className="mt-[-2px] inline-block"
                />
              )}
              {action.type === "action" && (
                <Image
                  src="https://raw.githubusercontent.com/lens-protocol/open-actions-directory/d6c6423563da1db8d93d58ccfb5c7974901821a8/public/svg/built.svg"
                  width={40}
                  height={20}
                  alt="Idea"
                  className="mt-[-2px] inline-block"
                />
              )}
            </div>
            <div className="flex gap-2">
              {action.videoLink && (
                <Link
                  href={action.videoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hidden md:block"
                >
                  <div
                    className="
                  flex py-0 h-[20px] items-center
                  rounded px-[7px] bg-[#FBFAF9]
                  "
                  >
                    <Image
                      src={"/svg/video.svg"}
                      width={13.55}
                      height={8.34}
                      alt="Video Link"
                    />
                    <p
                      className="
                      ml-1 leading-3 font-[500] text-[12px] text-[#848281]"
                    >
                      Video
                    </p>
                  </div>
                </Link>
              )}
              {action.figmaLink && (
                <Link
                  href={action.figmaLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hidden md:block"
                >
                  <div
                    className="
                  flex py-0 h-[20px] items-center
                  rounded px-[7px] bg-[#FBFAF9]
                  "
                  >
                    <Image
                      src={
                        "https://open-actions-directory-beta.vercel.app/svg/figma.svg"
                      }
                      width={8}
                      height={10}
                      alt="Figma Link"
                    />
                    <p
                      className="
                      ml-1 leading-3 font-[500] text-[12px] text-[#848281]"
                    >
                      Figma
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <p
            className="
            text-[#848281] text-md mt-1"
          >
            {action.tag}
          </p>
          <div className="flex flex-row">
            {action.videoLink && (
              <Link
                href={action.videoLink}
                rel="noopener noreferrer"
                target="_blank"
                className="md:hidden"
              >
                <div
                  className="
                  h-[20px] flex max-w-fit items-center
                  px-[7px] py-0 mt-3 rounded bg-[#FBFAF9]
                  "
                >
                  <Image
                    src={"/svg/video.svg"}
                    width={13.55}
                    height={8.34}
                    alt="Video Link"
                  />
                  <p
                    className="
                      ml-1 leading-3 font-[500] text-[12px] text-[#848281]"
                  >
                    Video
                  </p>
                </div>
              </Link>
            )}
            {action.figmaLink && (
              <Link
                href={action.figmaLink}
                rel="noopener noreferrer"
                target="_blank"
                className="md:hidden"
              >
                <div
                  className="
                  h-[20px] flex max-w-fit items-center
                  px-[7px] py-0 ml-2 mt-3 rounded bg-[#FBFAF9]
                "
                >
                  <Image
                    src={
                      "https://open-actions-directory-beta.vercel.app/svg/figma.svg"
                    }
                    width={8}
                    height={10}
                    alt="Figma Link"
                  />
                  <p
                    className="
                    ml-1 leading-3 font-[500] text-[12px] text-[#848281]"
                  >
                    Figma
                  </p>
                </div>
              </Link>
            )}
          </div>
          <p
            className="
            mt-4 text-[#848281] font-[400]"
          >
            {action["long-description"]}
          </p>
          <div
            className="
          flex flex-none mt-10 items-end
          md:flex-1
          "
          >
            {!action.link && (
              <Link
                href="https://docs.lens.xyz/docs/creating-a-publication-action"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center px-[16px] py-[11px]
                  rounded-full bg-[#343433] 
                  text-white text-sm
                  hover:bg-black transition duration-300
                  "
              >
                <p className="text-base font-[500]">View Docs</p>
                <Image
                  src={"/svg/arrow-white.svg"}
                  alt="Arrow"
                  height={13}
                  width={13}
                  className="ml-1"
                />
              </Link>
            )}
            {action.link && (
              <Link
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center px-[16px] py-[11px]
                  rounded-full bg-[#343433] 
                  text-white text-sm
                  hover:bg-black transition
                  "
              >
                <p className="text-base font-[500]">View Code</p>
                <Image
                  src={"/svg/arrow-white.svg"}
                  alt="Arrow"
                  height={13}
                  width={13}
                  className="ml-1"
                />
              </Link>
            )}
            <Link
              href="https://github.com/lens-protocol/verified-modules"
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-3
                bg-[#F0F0F0]
                rounded-full text-black px-[16px] py-[11px]
                text-sm
                flex items-center
                hover:bg-[#D9D9D9] transition duration-300
              "
            >
              <p className="text-base font-[500]">Submit Post</p>
              <Image
                src={"/svg/arrow.svg"}
                alt="Arrow"
                height={13}
                width={13}
                className="ml-1"
              />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
