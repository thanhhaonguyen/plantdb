import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../assets/lua.jpg';
import slider2 from '../assets/ngo.jpg';
import slider3 from '../assets/dua.jpg';
import slider4 from '../assets/lan.jpg';
import slider5 from '../assets/DN.jpg';

const arrImages = [slider1, slider2, slider3, slider4, slider5];

export const SlickSlider = () => {
    const settings = {
        dots: true,
        slidesToShow: 3, // Mặc định hiển thị 3 slides
        slidesToScroll: 2, // Mặc định cuộn 2 slides
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        className: 'z-10',
        responsive: [
            {
                breakpoint: 1024, // Khi màn hình nhỏ hơn 1024px (tablet)
                settings: {
                    slidesToShow: 2, // Hiển thị 2 slides
                    slidesToScroll: 1, // Cuộn 1 slide
                },
            },
            {
                breakpoint: 768, // Khi màn hình nhỏ hơn 768px (mobile)
                settings: {
                    slidesToShow: 1, // Hiển thị 1 slide
                    slidesToScroll: 1, // Cuộn 1 slide
                },
            },
        ],
    };

    return (
        <div className="w-full relative z-5 p-6">
            <Slider {...settings}>
                {arrImages.map((item, index) => {
                    return (
                        <img
                            className="w-full h-[300px] cursor-pointer"
                            key={index}
                            src={item}
                            alt={`slider-image-${index}`}
                            //onClick={() => handleClick(index)}
                        />
                    );
                })}
            </Slider>
        </div>
    );
};
