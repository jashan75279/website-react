import React from 'react'
import '../css/Home.css'
import ImageSlider from '../components/components-component/ImageSlider';
import Donation from '../components/components-component/Donation';
import { SliderData } from '../components/components-component/SliderData';
import Counter from '../components/components-component/Counter';
import Footer from '../Footer'
// import Campagin from '../components/components-component/Campagin'

const Home = (props) => {
  return (
    <>
      <section className="main">
        <div className="direct-donation">
            <ImageSlider slides={SliderData} />
           <Donation />
            <Counter />
            {/* <Campagin /> */}
             <Footer />

        </div>

        
        
        
      </section>


             {/* making counter section in css */}
             
    </>
  )
}

export default Home
