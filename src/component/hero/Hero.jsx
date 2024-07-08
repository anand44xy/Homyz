import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion, spring } from 'framer-motion'

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className="hero-container innerWidth paddings">
                {/* hero-left */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className="orange-circle">
                        </div>
                        <motion.h1 
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}>
                            Discover <br />
                            Most Suitable <br />
                            Property
                        </motion.h1>
                    </div>

                    <div className="hero-des flexColStart">
                        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                        <span className='secondaryText rwd'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="search-bar flexCenter">
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" />
                        <div className="button">Search</div>
                    </div>

                    <div className="status flexCenter">
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={8000} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Products
                            </span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy Customers
                            </span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp end={84} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Award Winning
                            </span>
                        </div>
                    </div>

                </div>

                {/* hero-right */}
                <div className="hero-right flexCenter">
                    <motion.div className="img-container"
                     initial = {{x: '7rem', opacity: 0}}
                     animate = {{x: '0', opacity: 1}}
                     transition={{
                            duration:2,
                            type: "spring",
                        }}>
                        <img src="./hero-image.png" alt="Hero" />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Hero;
