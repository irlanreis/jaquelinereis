import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import work01 from '../assets/images/1-work.svg'
import work02 from '../assets/images/2-work.svg'
import work03 from '../assets/images/3-work.svg'
import work04 from '../assets/images/4-work.svg'
import work05 from '../assets/images/5-work.svg'

function Destaques() {
  const images = [
    work01,
    work02,
    work03,
    work04,
    work05
  ]

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
          centerMode: true,
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
      <Slider className="bg-black pb-8 " {...settings}>
        {images.map((img, i) => (
          <div className="flex flex-row sm:w-80 sm:h-96 relative 2xl:w-72 2xl:h-96">
            <img
              key={i}
              className="sm:w-80 2xl:h-96 2xl:w-96 absolute"
              src={img}
              alt={`design ${i + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Destaques;