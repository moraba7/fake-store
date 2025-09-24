function CategorySection() {
  const images = [
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Phone',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740299548.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Gold',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'LapTop',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Electronics',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Stationery',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/d825f64f509cd5067a9022528c465e8ca705f60d_1740299511.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Home Appliances',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740299618.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Online Supermarket',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1740299538.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Clothing & Fashion',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/8a042388b93c5116604f35092a1fb35f8f0756be_1740299467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Kitchen Appliances',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
      title: 'Sport',
    },
  ]

  return (
    <>
      <div className="mt-2">
        <h1 className="text-indigo-950 text-2xl text-center font-bold hover:font-serif">
          Shop based on category
        </h1>
        <div className="flex justify-center gap-15 flex-wrap px-10 mt-6">
          {images.slice(0, 5).map((image, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {' '}
              <img
                src={image.url}
                alt={image.title}
                className="w-29 h-29 object-cover rounded-full"
              />
              <p className="text-sm text-gray-700 font-bold">{image.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-15 flex-wrap px-10 mt-10">
          {images.slice(5, 10).map((image, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                src={image.url}
                alt={image.title}
                className="w-29 h-29 object-cover rounded-full"
              />
              <p className="text-sm text-gray-700 font-bold">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategorySection
