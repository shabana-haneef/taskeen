import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Facilities from './pages/Facilities'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="packages" element={<Rooms />} />
                <Route path="facilities" element={<Facilities />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default App
