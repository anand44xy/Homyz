import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css';

import { MdOutlineArrowDropDown } from "react-icons/md"
import './Value.css'
import data from '../../assets/utils/accordion'

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="v-container innerWidth">
                {/* left side */}
                <div className="v-left ">
                    <div className="img-container ">
                        <img src="./value.png" alt="" />
                    </div>
                </div>


                {/* right side */}
                <div className="v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>
                        Value We Give To You
                    </span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you. <br />
                        We beleive a good blace to live can make your life better
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <AccordionItemState>
                                                {({ expanded }) => 
                                                    expanded
                                                    ? setClassName('expanded')
                                                    : setClassName('collapsed')          
                                                }
                                            </AccordionItemState>
                                            <div className="icon flexCenter">{item.icon}</div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className="icon flexCenter">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }

                        )}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value