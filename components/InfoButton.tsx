'use client'
import useInfoModal from '@/hooks/useInfoModal';
import { InfoIcon } from 'lucide-react';
import { useCallback } from 'react';

interface InfoButtonProps{
  data?: any
}
export default function InfoButton({data}: InfoButtonProps) {
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);
  return (
    <button onClick={handleOpenModal} className="bg-white text-white bg-opacity-30 rounded-xl py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <InfoIcon className="mr-1 w-4 md:w-7"/>
            More Info
    </button>
  )
}
