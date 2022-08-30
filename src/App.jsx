import React, { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './routes/Home'
import About from './routes/About'
import Blog from './routes/Blog'
import Read from './routes/Read'
import Contact from './routes/Contact'
import Cookies from './routes/Cookies'
import Privacy from './routes/privacy'
import Tos from './routes/tos'
import NotFound from './routes/NotFound'
import Preloader from './components/Preloader'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"
import { ReactComponent as Sun } from './assets/svg/sun.svg'
import { ReactComponent as Moon } from './assets/svg/moon.svg'

const App =() => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const toggleTheme = () => {
      if(theme === 'dark'){
          setTheme('light')
      } else if(theme === 'light') {
          setTheme('dark')
      } 
  }
  //is First Load
  const [isFirst, setIsfirst] = useLocalStorage('isFirst', 'yes');
  const [preloader, setPreloader] = useState(false)

  //page pre loader
  document.onreadystatechange = function() {
      if (window.location.pathname === "/" && isFirst === 'yes'){
          setIsfirst('no')
          if (document.readyState !== "complete") {
              setPreloader(true)
          } else {
              setPreloader(true)
              setTimeout(() => {
                  setPreloader(false)
              }, 6000);
          }
      } else {
          setPreloader(false)
      }
  };
  return(
    <Fragment>
      <div className="App" data-theme={theme}>
        {/* preloader */}
        <div className={(preloader)?"preloader":"hidepreloader"}>
          <Preloader />
        </div>
        {/* contents */}
        <div className={(preloader)?"hidecontents":"contents"}>
          <div className="themeControls">
            <div className="themeTogglers" title="change theme">
              {(theme==='light')?
              <Sun className="lightMode" onClick={()=>{toggleTheme('light'); window.scrollTo(0, 0);}} />:
              <Moon className="darkMode"  onClick={()=>{toggleTheme('dark'); window.scrollTo(0, 0);}} />}
            </div>
          </div>
          <CookieConsent
            disableStyles={true}
            location="bottom"
            buttonText="Okay"
            cookieName="tenAfric"
            buttonClasses="button"
            containerClasses="cookieConsent"
            expires={150}
          >
              <p className="cookieText">We use cookies to improve your browsing experience.</p>
          </CookieConsent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/blog" element={<Blog theme={theme} />} />
            <Route path="/read" element={<Read theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/cookies" element={<Cookies theme={theme} />} />
            <Route path="/privacy" element={<Privacy theme={theme} />} />
            <Route path="/tos" element={<Tos theme={theme} />} />
            <Route path="*" element={<NotFound theme={theme} />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </Fragment>
  )
}
export default App