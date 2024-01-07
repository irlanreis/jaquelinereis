import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <h2 className="text-white p-2">Destaques</h2>
      <Slider className="bg-black" {...settings}>
        <div>
          <p className="w-64 h-80 border-2 bg-amber-500">A</p>
        </div>
        <div>
          <p className="w-64 h-80 border-2 bg-amber-500">B</p>
        </div>
        <div>
          <p className="w-64 h-80 border-2 bg-amber-500">C</p>
        </div>
        <div>
          <p className="w-64 h-80 border-2 bg-amber-500">D</p>
        </div>
        
      </Slider>
    </div>
  )
}

export default Destaques;