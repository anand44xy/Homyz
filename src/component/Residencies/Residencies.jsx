import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../assets/utils/slider.json'
import { SliderSetting } from '../../assets/utils/common'

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="r-container paddings innerWidth">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper className='swiper'
                    {...SliderSetting}
                    slidesPerView={4}
                    spaceBetween={0}
                >
                    <SliderButtons />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart ">
                                <img src={card.image} alt="home" />

                                <span className='r-price secondaryText'>
                                    <span style={{ color: 'orange' }}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">
                                    {card.detail}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="r-buttons flexCenter">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
