import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

const RootLayouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer /></>
    )
}

export default RootLayouts;