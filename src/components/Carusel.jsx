import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from '../img/first.png'
import second from '../img/second.png'
import third from '../img/third.png'
import fourth from '../img/fourth.png'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='px-24 w-full'>
      <div className='pt-8 pl-4 '>
        <div className='border border-neutral-500 rounded-md px-6 py-10 '>
            <p className='text-sm'>“With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!”
            </p>
            <h5 className='text-xs pt-4 pb-16 text-red-700'>Read full story</h5>
            <div className='flex'>
                <img className='w-11 h-11' src={first}/>
                <div className='text-xs pl-4'>
                    <h6 >Mattias Johnson</h6>
                    <h6 >Key Account Manager</h6>
                    <h6 >Sweco</h6>
                </div>
            </div>
        </div>
      </div>
      <div className='pt-8 pl-4'>
        <div className='border border-neutral-500 rounded-md px-6 py-10 '>
            <p className='text-sm'>“The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.”
            </p>
            <h5 className='text-xs pt-4 pb-16 text-red-700'>Read full story</h5>
            <div className='flex'>
                <img className='w-11 h-11' src={second}/>
                <div className='text-xs pl-4'>
                    <h6>Elin Skoglund</h6>
                    <h6>HR Business Partner</h6>
                    <h6>Hedin Bil</h6>
                </div>
            </div>
        </div>
      </div>
      <div className='pt-8 pl-4'>
        <div className='border border-neutral-500 rounded-md px-6 py-10 '>
            <p className='text-sm'>“From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.”
            </p>
            <h5 className='text-xs pt-4 pb-20 text-red-700'>Read full story</h5>
            <div className='flex'>
                <img className='w-11 h-11' src={third}/>
                <div className='text-xs pl-4'>
                    <h6>Tor Myhrman</h6>
                    <h6>Head of Indirect Sourcin</h6>
                    <h6>Systembolaget</h6>
                </div>
            </div>
        </div>
      </div>
      <div className='pt-8 pl-4'>
        <div className='border border-neutral-500 rounded-md px-6 py-10 '>
            <p className='text-sm'>“With Oneflow, it’s very easy to create contracts and templates. Instead of uploading a PDF for signing, we create the contract on the same platform as we sign. And Oneflow’s templates make it very easy to create multiple contracts in one click.”
            </p>
            <h5 className='text-xs pt-4 pb-6 text-red-700'>Read full story</h5>
            <div className='flex'>
                <img className='w-11 h-11' src={fourth}/>
                <div className='text-xs pl-4'>
                    <h6>Elin Skoglund</h6>
                    <h6>HR Business Partner</h6>
                    <h6>Hedin Bil</h6>
                </div>
            </div>
        </div>
      </div>
</Slider>

  );
};

export default Carousel;