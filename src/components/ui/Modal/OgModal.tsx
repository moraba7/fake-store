import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export type OgModalProps = {
  isOpen: boolean
  onOpen?: () => void
  onClose: () => void
  children: ReactNode
  className?: string
}

export default function OgModal({
  isOpen,
  onOpen,
  onClose,
  children,
  className = '',
}: OgModalProps) {
  useEffect(() => {
    if (isOpen && onOpen) onOpen()
  }, [isOpen, onOpen])

  const modalRoot = document.getElementById('modal-root')
  if (!isOpen || !modalRoot) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-lg relative p-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-black hover:font-bold cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
