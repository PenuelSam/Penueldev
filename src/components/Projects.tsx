"use client"
import React from 'react'
import arrow from "@/assets/icons/arrow.png"
import video from "@/assets/icons/video.png"
import Image from 'next/image'
import { useModalStore } from '@/store/modal.store'

export const projects = [
    {
        id: 1,
        cover: "",
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators",
        url: "",
        video: "",
        date: "2024"
    },
    {
        id: 2,
        cover: "",
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators",
        url: "",
        video: "",
        date: "2024"
    },
    {
        id: 3,
        cover: "",
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators",
        url: "",
        video: "",
        date: "2024"
    },
    {
        id: 4,
        cover: "",
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators",
        url: "",
        video: "",
        date: "2024"
    },
]

const Projects = () => {    
    const {openModal} = useModalStore();

  return (
    <div className='w-full h-full md:px-[32px] px-6 my-10'>
      <div className='flex flex-col gap-[80px] py-20 '>
      <h1 className='font-MetroSans font-bold text-[64px] leading-[76.81px] tracking-[-0.02em]'>Projects</h1>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-y-4'>
        {
            projects.map((proj,index) => {
                const formattedIndex = String(index + 1).padStart(2, '0');
                return(
                <div key={index} className='flex flex-col gap-5'>
                    <div className='md:w-[680px] md:h-[680px] w-[500px] h-[500px] bg-[#1E1E1E]' onClick={() => openModal(proj)}></div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <p className='font-MetroSans font-medium text-[24px] leading-[28.8px] tracking-[-0.02em] text-[#DFE0D8]'>{formattedIndex}</p>
                            <div className='relative'>
                            <p className='font-MetroSans font-bold text-[24px] leading-[28.8px] tracking-[-0.02em]'>{proj.name}</p>
                            <p className='border-[#DFE0D8] w-[39px] h-[20px] rounded-[4px] border text-[#DFE0D8] text-[12px] font-bold font-MetroSans tracking-[-0.02em] absolute top-[-5px] right-[-45px] flex items-center justify-center'>{proj.date}</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[545px] font-MetroSans font-light text-[16px] text-[#808080] leading-[19.2px] tracking-[-0.02em]'>{proj.desc}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='   flex items-center gap-4'>
                            <Image src={arrow} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>visit site</p>
                        </div>
                        <div className='   flex items-center gap-4'>
                            <Image src={video} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>watch video</p>
                        </div>
                    </div>
                </div>
            )})
        }
      </div>
      </div>
    </div>
  )
}

export default Projects
