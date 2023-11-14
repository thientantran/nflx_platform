'use client'
import { ShieldCloseIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'


interface InfoModalProps{
  visible?: boolean
  onClose: any
}
export default function InfoModal({visible, onClose}: InfoModalProps) {
  const [isVisible, setIsVisible] = useState(Boolean(visible))
  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
          <ShieldCloseIcon className="text-white w-6" />
          <p className='text-white'>Click here</p>
      </div>
    </div>
  )
}
