'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '@/store/modal.store';
import Image from 'next/image';
import arrow from "@/assets/icons/arrow.png"
import WarningModal from './Warning';

const ProjectModal = () => {
  const { isOpen, selectedProject, closeModal } = useModalStore();
  const [showWarning, setShowWarning] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  // Animation variants for the modal
  const modalVariants = {
    hidden: {
      y: '100%', // Start off-screen
      opacity: 0,
    },
    visible: {
      y: 0, // Slide up to its position
      opacity: 1,
      transition: {
        type: 'spring', // Spring animation for smooth motion
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      y: '100%', // Slide back down
      opacity: 0,
      transition: {
        duration: 0.3, // Faster exit
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Close the modal when clicking the backdrop
  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modalBackdrop') {
      closeModal();
    }
  };

  // Handle the visit site button click
  const handleVisitClick = () => {
    if (selectedProject?.isIncomplete) {
      setSelectedUrl(selectedProject.url);
      setShowWarning(true);
    } else {
      window.open(selectedProject?.url, "_blank");
    }
  };

  // Confirm visiting the site
  const confirmVisit = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
    setShowWarning(false);
  };


  if (!isOpen || !selectedProject) return null;

  return (
    <>
    <motion.div
      id="modalBackdrop"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={handleClose}
    >
      <motion.div
        className="w-full h-[93vh] bg-[#1E1E1E] px-2 md:px-6 md:py-6 rounded-t-[40px] text-white flex justify-center items-center"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="absolute top-20 right-4 text-xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
       
       <div className='md:w-[60%] w-[100%]  md:h-[80%] '>
        <video src={selectedProject.video} muted loop autoPlay  className='w-full h-full object-cover rounded-md'/>
       </div>
       <div  onClick={handleVisitClick} className=' absolute top-[5.4rem] md:top-[5.5rem] right-20  flex items-center gap-2 cursor-pointer'>
            <Image src={arrow} alt='' width={20} height={20} quality={100} className='w-[20px] h-[20px] object-cover'/>
                <p className='underline text-[20px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>visit site</p>
        </div>
      </motion.div>
    </motion.div>

    <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={confirmVisit}
      />
    </>
  );
};

export default ProjectModal;
