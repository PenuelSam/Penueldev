"use client"
import React, { useState } from 'react'
import arrow from "@/assets/icons/arrow.png"
import video from "@/assets/icons/video.png"
import Image from 'next/image'
import { useModalStore } from '@/store/modal.store'
import vid1 from "@/assets/videos/dressearth.mp4"
import vid2 from "@/assets/videos/euterpe.mp4"
import vid3 from "@/assets/videos/thenotes.mp4"
import vid4 from "@/assets/videos/ymk.mp4"
import img1 from "@/assets/image/dressthearthcover.png"
import img2 from "@/assets/image/euterpecover.png"
import img3 from "@/assets/image/thenotescover.png"
import img4 from "@/assets/image/ymkcover.png"

import { StaticImageData } from 'next/image';
import WarningModal from './Warning'

export interface Project {
    id: number;
    cover: StaticImageData;
    name: string;
    desc: string;
    url: string;
    video: string;
    date: string;
    isIncomplete: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        cover: img2,
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators.",
        url: "https://app.euterpe.fm/",
        video: vid2,
        date: "Present",
        isIncomplete: true,
    },
    {
        id: 2,
        cover: img4,
        name: "Ymkupnext!",
        desc: "A sleek portfolio website built for a creative director and videographer to showcase their work. Features a visually rich design, smooth animations, and a structured portfolio layout.",
        url: "https://ymkupnext.onrender.com/",
        video: vid4,
        date: "2024",
        isIncomplete: false,
    },
    {
        id: 3,
        cover: img3,
        name: "The Notes",
        desc: "An e-commerce platform designed for an aromatherapy brand, offering a seamless shopping experience. Built with a user-friendly interface, secure checkout, and an elegant product display.",
        url: "https://the-notes-ivory.vercel.app/",
        video: vid3,
        date: "Present",
        isIncomplete: true,
    },
    {
        id: 4,
        cover: img1,
        name: "Dress the Earth",
        desc: "A collaborative freelance project focused on sustainability and eco-friendly products. Developed with a clean aesthetic, engaging content, and intuitive navigation for a smooth user experience.",
        url: "https://dresstheearth.netlify.app/",
        video: vid1,
        date: "2024",
        isIncomplete: false,
    },
]

const Projects = () => {    
    const {openModal} = useModalStore();

    const [showWarning, setShowWarning] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const handleVisitClick = (proj: { url: string; isIncomplete: boolean }) => {
    if (proj.isIncomplete) {
      setSelectedUrl(proj.url);
      setShowWarning(true);
    } else {
      window.open(proj.url, "_blank");
    }
  };

  const confirmVisit = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
    setShowWarning(false);
  };

  return (
    <div className='w-full h-full md:px-[32px] px-6 my-10'>
      <div className='flex flex-col gap-[80px] py-20 '>
      <h1 className='font-MetroSans font-bold text-[64px] leading-[76.81px] tracking-[-0.02em]'>Projects</h1>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-10'>
        {
            projects.map((proj,index) => {
                const formattedIndex = String(index + 1).padStart(2, '0');
                return(
                <div key={index} className='flex flex-col gap-5'>
                    <div className='w-[100%] md:h-[500px]  h-[300px] ' onClick={() => openModal(proj)}>
                    <Image src={proj.cover} alt='' className='w-full h-full object-cover rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <p className='font-MetroSans font-medium text-[24px] leading-[28.8px] tracking-[-0.02em] text-[#DFE0D8]'>{formattedIndex}</p>
                            <div className='relative'>
                            <p className='font-MetroSans font-bold text-[24px] leading-[28.8px] tracking-[-0.02em]'>{proj.name}</p>
                            <p className='border-[#DFE0D8] w-[42px] h-[20px] rounded-[4px] border text-[#DFE0D8] text-[12px] font-bold font-MetroSans tracking-[-0.02em] absolute top-[-5px] right-[-45px] flex items-center justify-center '>{proj.date}</p>
                            </div>
                        </div>
                        <div>
                            <p className='md:w-[545px]  font-MetroSans font-light text-[16px] text-[#808080] leading-[19.2px] tracking-[-0.02em] '>{proj.desc}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => handleVisitClick(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <Image src={arrow} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>visit site</p>
                        </div>
                        <div onClick={() => openModal(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <Image src={video} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>watch video</p>
                        </div>
                    </div>
                </div>
            )})
        }
      </div>
      </div>

      <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={confirmVisit}
      />
    </div>
  )
}

export default Projects
