import React from 'react'
import '../components-component/Counter.css'
import {  FaWheelchair } from 'react-icons/fa'
import { MdMasks, MdSanitizer } from "react-icons/md";
import Item from '../Item';
// const item = '../components/Item'
const Counter = (props) => {
    return (
        <>

           

            <div className="project-counter-wrp">
            <h2 className="text-center">Projects statistics</h2>
                <ul>
                    <li>
                        <a href="" className='component'> <FaWheelchair /> </a>
                        <p id="number1" className="number">500</p>
                        <span></span>
                        <p>Wheel Chairs</p>
                    </li>
                    <li>
                    <a href='../components/Item'  className='component'> <MdMasks /> </a>
                        <p id="number2" className="number">20165</p>
                        <span></span>
                        <p>Masks</p>
                    </li>
                    
                    <li>
                    <a href="" className='component'> <MdSanitizer /> </a>
                        <p id="number3" className="number">359</p>
                        <span></span>
                        <p>Sanitizer </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Counter
