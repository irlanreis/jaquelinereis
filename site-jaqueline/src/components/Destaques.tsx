import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jaque01 from '../assets/images/Jaque-01.svg'

function Destaques() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }

  return (
    <div>
      <h2 className="text-white p-2 text-6xl font-extralight bg-black pb-10">Destaques</h2>
      <Slider className="400 space-x-16 bg-black pb-8" {...settings}>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={jaque01} alt="img-1" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={jaque01} alt="img-2" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={jaque01} alt="img-3" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={jaque01} alt="img-4" />
        </div>

      </Slider>
    </div>
  )
}

export default Destaques;