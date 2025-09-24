import SwiperPart from './Swipers/ProoductSwiper'
import StorySection from './Swipers/StorySection'
import ProductsSale from './Swipers/ProductsSale'
import CategoryStorySection from './Swipers/CategoryStorySection'
import Partnership from './Partnership'
import MarketSale from './MarketSale'
import SecondPartnership from './SecondPartnership'
import CategorySection from './CategorySection'
import ThirdPartnership from './ThirdPartnership'
import Footer from '../../components/footer/footer'

export default function HomePage() {
  return (
    <div>
      <StorySection />
      <SwiperPart />
      <CategoryStorySection />
      <ProductsSale />
      <Partnership />
      <MarketSale />
      <SecondPartnership />
      <CategorySection />
      <ThirdPartnership />
      <Footer />

      {/* <div className="w-scree bg-transparent min-h-[800px]">
        <h2 className="text-center pt-10"></h2>
      </div> */}
    </div>
  )
}
