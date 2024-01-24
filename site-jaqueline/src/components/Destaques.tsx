import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import work01 from '../assets/images/1-work.svg'
import work02 from '../assets/images/2-work.svg'
import work03 from '../assets/images/3-work.svg'
import work04 from '../assets/images/4-work.svg'
import work05 from '../assets/images/5-work.svg'

function Destaques() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
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
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <div>
      <h2 className="text-white p-2 text-6xl font-extralight bg-black pb-10">Destaques</h2>
      <Slider className="400 space-x-16 bg-black pb-8" {...settings}>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={work01} alt="img-1" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={work02} alt="img-2" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={work03} alt="img-3" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={work04} alt="img-4" />
        </div>
        <div>
          <img className="w-64 h-80 border-2 bg-amber-500" src={work05} alt="img-4" />
        </div>

      </Slider>
    </div>
  )
}

export default Destaques;