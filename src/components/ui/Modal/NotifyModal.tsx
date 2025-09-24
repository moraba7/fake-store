// import { useState } from 'react'
import OgModal from './OgModal'
import { useNavigate } from 'react-router-dom'

type OgModalProps = {
  isOpen: boolean
  onClose: () => void
}

function NotifyModal({ isOpen, onClose }: OgModalProps) {
  //   const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <OgModal
        isOpen={isOpen}
        //   onOpen={() => console.log('modal')}
        onClose={onClose}
        className="w-[400px]"
      >
        <p className="py-4 mt-10 text-gray-600 text-center font-semibold">
          Can we send you notifications for special discounts and offers?
        </p>
        <div className="flex justify-end gap-2 mt-4"></div>
        <button
          className="mr-5 w-13 rounded-xl bg-indigo-700 border-none cursor-pointer hover:bg-indigo-500"
          onClick={onClose}
        >
          No
        </button>
        <button
          className="mr-5 w-13 rounded-xl bg-indigo-700 border-none cursor-pointer hover:bg-indigo-500"
          onClick={() => {
            onClose()
            setTimeout(() => navigate('/signup?fromNotify=true'), 100)
          }}
        >
          Yes
        </button>
      </OgModal>
    </>
  )
}

export default NotifyModal
