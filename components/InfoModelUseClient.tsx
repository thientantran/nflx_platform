'use client'

import useInfoModal from "@/hooks/useInfoModal";
import InfoModal from "./InfoModal";

export default function InfoModelUseClient() {
  const {isOpen, closeModal} = useInfoModal();
  return (
    <InfoModal visible={isOpen} onClose={closeModal}/>
  )
}
