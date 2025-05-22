import React from 'react'
import Banner from './components/Banner'
import InfomationOur from './components/InfomationOur'
import InformationIntro from './components/InformationIntro'
import BestProducts from './components/BestProducts'
import OurCollections from './components/OurCollections'
import PromoBanner from './components/Sale'
import BestSelling from './components/BestSelling'

const Home = () => {
    return (
        <>
         <Banner/>
         <InfomationOur/>
         <InformationIntro/>
         <BestProducts/>
         <OurCollections/>
         <PromoBanner/>
         <BestSelling/>
        </>

    )
}

export default Home