import React, {useRef} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection.jsx';
import Footer from '../Footer.jsx';
import BusinessCard from './BusinessCard.jsx';
import Testimonials from './Testimonials.jsx';
import CallToAction from './CallToAction.jsx';
import Products from './Products.jsx';

const Home = (props) => {
    const {scrollToHandler} = props;
    const ref = useRef();

    const handleGetAQuoteClick = () => {
        console.log('clicked')
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return(
        <>
            <HeroSection scrollToHandler={handleGetAQuoteClick}></HeroSection>
            <div className='m-t-l'></div>
            <Products></Products>
            <hr className='divider-thin m-t-l m-b-l'></hr>
            <BusinessCard />
            {/* <Testimonials /> */}
            <hr className='divider-thin m-t-l m-b-l'></hr>
            <div ref={ref}></div>
            <CallToAction />
            
            <Footer isShowSubscribtion={false} isShowLinks={false} isShowSocials={true} isStandAlone={true}/>
        </>
    )
}

export default Home;