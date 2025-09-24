import imgOne from '../../assets/unique-design-your-creative-product-advertisement-poster.webp'
import imgTwo from '../../assets/iron-box-electronics-gadgets-flyer-design-template-58a5e5cc557acb55830713e37f5bc7b2_screen.jpg'
import imgThree from '../../assets/ba93a533979530.56bf52edbfe85.webp'
import imgFour from '../../assets/luxury-cosmetic-product-advertisement-vector-14856586.jpg'

function Partnership() {
  return (
    <>
      <div className="flex justify-center gap-4 p-8 pt-5">
        <img
          src={imgOne}
          alt="partnership"
          className="w-[315px] h-[180px] rounded-2xl"
        />
        <img
          src={imgTwo}
          alt="partnership"
          className="w-[315px] h-[180px] rounded-2xl"
        />
        <img
          src={imgThree}
          alt="partnership"
          className="w-[315px] h-[180px] rounded-2xl"
        />
        <img
          src={imgFour}
          alt="partnership"
          className="w-[315px] h-[180px] rounded-2xl"
        />
      </div>
    </>
  )
}

export default Partnership
