import React, { Fragment, useState } from 'react'
import '../styles/css/blog.css'
import data from '../data/blogdata.json'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/arrowRight.svg'
import { ReactComponent as Search } from '../assets/svg/search.svg'
import { ReactComponent as Filters } from '../assets/svg/filters.svg'
import { ReactComponent as Times } from '../assets/svg/x-mark.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Agility from '../assets/images/agility.png'
import African from '../assets/images/african_lady.jpg'

const Blog = () => {
    const [search, setSearch] = useState(false)
    const showSearch = () => {
        // hide body scroll bar
        document.querySelector('.parentEl').classList.add('hideBodyScrollBar');
        setSearch(true)
    }
    const closeSearch = () => {
        // show body scroll bar
        document.querySelector('.parentEl').classList.remove('hideBodyScrollBar');
        setSearch(false)
    }
  return (
    <Fragment className="blogParent">
        <Header />
        <div className={(search)?"searchModal showSearchModal":"searchModal"}>
            <Times className="closeSearch" onClick={()=>{closeSearch()}}/>
            <div className="smodSearchForm">
                <form method="post">
                    <input type="text" className="blogModSearch" placeholder="search..." />
                </form>
            </div>
            <div class="highflex">
            {data.blogs.map((data)=>{return(
                <div class="highblogcard" key={data.id}>
                    <div class="bloghighImage">
                        <img src={Agility} alt="" />
                    </div>
                    <div class="bloghighTitle">
                        <Link to="/read" className="aertTitle">
                            <h2>{data.title}</h2>
                        </Link>
                        <div class="bloghighInfo">
                            <p><span>{data.DatePosted}</span> . {data.approxReadMinutes}min read</p>
                        </div>
                        <Link to="/read" className="aertTitle">
                            <p>{data.readHighlight}</p>
                        </Link>
                        <Link to="/read" className="aertReadMore">Read more <span><ArrowRight className="arrowRight"/></span></Link>
                    </div>
                </div>
            )})}
            </div>
        </div>
        <section class="blog-sec-top">
            <h1>Our Blog</h1>
            <p>In a software-defined world, the tenAfric Blog is your place to navigate through the renaissance in technology.</p>
        </section>
        <section class="blog-landing pt-3">
            <div class="blog-landing-wrapper">
                <div class="spot-blog">
                    <div class="spot-image">
                        <img src={Agility} alt="" />
                    </div>
                    <div class="spot-texts">
                        <span class="spot-category">Web Development</span> <span class="spot-date">june 22 2022</span>
                        <h2><Link to="/read">7 Frontend JavaScript Frameworks Loved by Developers in 2022</Link></h2>
                        <p><Link to="/read">is undoubtedly quite popular in building interactive and multimedia content. In 2021, it completed the ninth year in a row as the most commonly used programming language. A JavaScript frontend framework is a collection of JavaScript code libraries that helps developers with standard programming features and tasks. In addition, it offers reusable code components, a universal development environment, compilers, toolsets, code libraries, APIs, etc., to facilitate the app.</Link></p>
                        <div class="spot-author">
                            <img src={African} alt="" />
                            <div class="spot-author-name">
                                <h4>Dennis Kibet</h4>
                                <p>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blogs-showcase">
            <div class="bloghighHeader">
                <div class="blogsFileters">
                    <div class="filter activeFilter">
                        <p>All</p>
                    </div>
                    <div class="filter">
                        <p>nullAPI</p>
                    </div>
                    <div class="filter">
                        <p>Nodejs</p>
                    </div>
                    <div class="filter">
                        <p>php</p>
                    </div>
                    <div class="filter">
                        <p>Python</p>
                    </div>
                    <div class="filter">
                        <p>Ruby</p>
                    </div>
                </div>
                <div class="viewIcon">
                <Search className="filtersIcons" onClick={()=>{showSearch()}}/>
                <Filters className="filtersIcons"/>
                </div>
            </div>
            <div class="highflex">
            {data.blogs.map((data)=>{return(
                <div class="highblogcard" key={data.id}>
                    <div class="bloghighImage">
                        <img src={Agility} alt="" />
                    </div>
                    <div class="bloghighTitle">
                        <Link to="/read" className="aertTitle">
                            <h2>{data.title}</h2>
                        </Link>
                        <div class="bloghighInfo">
                            <p><span>{data.DatePosted}</span> . {data.approxReadMinutes}min read</p>
                        </div>
                        <Link to="/read" className="aertTitle">
                            <p>{data.readHighlight}</p>
                        </Link>
                        <Link to="/read" className="aertReadMore">Read more <span><ArrowRight className="arrowRight"/></span></Link>
                    </div>
                </div>
            )})}
            </div>
        </section>
        <Footer />
    </Fragment>
  )
}

export default Blog