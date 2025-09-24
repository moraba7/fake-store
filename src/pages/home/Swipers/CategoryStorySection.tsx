import { useState, useEffect, useRef } from 'react'
import { FaLaptop, FaMale, FaFemale } from 'react-icons/fa'
import { GiHeartEarrings } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const categoryIcons: { [key: string]: JSX.Element } = {
  electronics: <FaLaptop size={40} />,
  jewelery: <GiHeartEarrings size={40} />,
  "men's clothing": <FaMale size={40} />,
  "women's clothing": <FaFemale size={40} />,
}

function CategoryStorySection() {
  const [category, setCategory] = useState<any[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [])
  console.log('rendred')

  return (
    <>
      <div className="relative flex flex-col mt-2 items-center gap-2">
        <div className="relative flex items-center">
          <div
            ref={containerRef}
            className="flex items-center gap-17 px-10 py-2"
          >
            {category.map((cat) => (
              <Link
                to={`/product/category/${encodeURIComponent(cat)}`}
                key={cat}
                className="flex flex-col items-center gap-4 min-w-[70px] scroll-snap-start"
              >
                <div className="w-19 h-19 bg-indigo-300 text-indigo-900 flex items-center justify-center rounded-full">
                  {categoryIcons[cat]}
                </div>
                <p className="text-sm font-bold capitalize text-gray-700">
                  {cat}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryStorySection
