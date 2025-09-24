import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

function StorySection() {
  const [story, setStory] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [])
  console.log('rendred')

  const totalPages = Math.ceil(story.length / itemsPerPage)
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const curentItems = story.slice(firstIndex, lastIndex)

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <>
      <div className="relative flex flex-col mt-2 items-center gap-2">
        <div className="relative flex items-center">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="absolute right-300 mt-26 btn bg-transparent text-gray-300 border-none shadow-none"
          >
            <IoArrowBackCircle size={32} />
          </button>

          <div
            ref={containerRef}
            className="flex items-center gap-10 px-10 py-2 scroll-snap-x mandatory scrollbar-hide"
          >
            {curentItems.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="flex flex-col items-center gap-2 min-w-[70px] scroll-snap-start"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-19 h-19 object-contain mt-32 rounded-full border-3 border-pink-400"
                />
                <span className="text-black text-sm text-center w-20 truncate">
                  {item.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </Link>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="absolute left-300 mt-26 btn bg-transparent text-gray-300 border-none shadow-none"
          >
            <IoArrowForwardCircle size={32} />
          </button>
        </div>
      </div>
    </>
  )
}

export default StorySection
