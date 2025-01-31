import React from 'react'

interface WarningModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }
  
export const Warning: React.FC<WarningModalProps> = ({ isOpen, onClose, onConfirm }) =>  {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 px-6 z-[999]">
          <div className="bg-[#0E0E0E] p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold">Warning!</p>
            <p className="mt-2 text-[#ededed]">
              This project is still in development. Some features may not work properly.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="bg-red-500 px-4 py-2 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                 onClick={onConfirm}
                className="bg-black px-4 py-2 rounded-lg text-white"
              >
                Continue to Site
              </button>
            </div>
          </div>
        </div>
  )
}

