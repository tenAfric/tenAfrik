import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './routes/Home'
import About from './routes/About'
import Blog from './routes/Blog'
import Read from './routes/Read'
import Contact from './routes/Contact'
import Cookies from './routes/cookies'
import Privacy from './routes/privacy'
import Tos from './routes/tos'
import NotFound from './routes/NotFound'

const App =() => {
  return(
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/read" element={<Read />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
export default App