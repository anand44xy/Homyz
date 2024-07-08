import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="c-container paddings innerWidth flexCenter">
            {/* left Side */}
            <div className="c-left flexColStart">
                <span className='orangeText'>
                    Our Contact Us
                </span>
                <span className='primaryText'>
                    Easy to contact Us
                </span>
                <span className='secondaryText'>
                We always ready to help by providijng the best services for you. We beleive a good <br /> blace to live can make your life better
                </span>

                <div className="contactModes ">
                    {/* First Row */}
                    <div className="row">
                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <MdCall size={30} />
                                </div>
                                <div className="detail flexColStart ">
                                     <span className='primaryText'>Call</span>
                                     <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Call Now</div>
                        </div>

                        {/* Second Mode */}
                        <div className="mode flexColCenter">
                            <div className="flexStart ">
                                <div className="icon flexCenter">
                                    <BsFillChatDotsFill size={30} />
                                </div>
                                <div className="detail flexColStart ">
                                     <span className='primaryText'>Chat</span>
                                     <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Chat Now</div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row">
                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <BsFillChatDotsFill size={30} />
                                </div>
                                <div className="detail flexColStart ">
                                     <span className='primaryText'>Video Call</span>
                                     <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Video Call Now</div>
                        </div>

                        {/* fourth mode */}
                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <HiChatBubbleBottomCenter size={30} />
                                </div>
                                <div className="detail flexColStart ">
                                     <span className='primaryText'>Message</span>
                                     <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="c-right">
                <div className="img-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact