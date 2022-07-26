import React, { useState, useEffect } from 'react'
import '../styles/css/blog.css'
import { api } from '../api/axios'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/arrowRight.svg'
import { ReactComponent as Search } from '../assets/svg/search.svg'
import { ReactComponent as Filters } from '../assets/svg/filters.svg'
import { ReactComponent as Times } from '../assets/svg/x-mark.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Agility from '../assets/images/agility.png'
import African from '../assets/images/african_lady.jpg'

const Blog = (props) => {
    const [data, setData] = useState({blogs: []})
    //get data
    let getData = async () => {
        let res = await api('GET', 'blog', {})
        setData(res)
    }
    useEffect(()=>{
        getData()
    }, [])
    const [search, setSearch] = useState(false)
    const [query, setQuery] = useState('')
    const [posts, setPosts] = useState(data.blogs)
    const showSearch = () => {
        // hide body scroll bar
        setSearch(true)
        document.querySelector('.parentEl').classList.add('hideBodyScrollBar');
    }
    const closeSearch = () => {
        // show body scroll bar
        setSearch(false)
        document.querySelector('.parentEl').classList.remove('hideBodyScrollBar');
    }
    const handleDat = (e) => {
        setQuery(e.target.value)
        if(!e.target.value){setPosts(data.blogs)}
        const resPosts = data.blogs.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()) || post.body.toLowerCase().includes(e.target.value.toLowerCase()))
        setPosts(resPosts)
    }
  return (
    <div className="blogParent">
        <Header theme={props.theme} />
        <div className={(search)?"searchModal showSearchModal":"searchModal"}>
            <Times className="closeSearch" onClick={()=>{closeSearch()}}/>
            <div className="smodSearchForm">
                <form method="post">
                    <input
                        type="text"
                        className="blogModSearch"
                        placeholder="search..."
                        value={query}
                        onChange={(e)=>{handleDat(e)}}/>
                </form>
            </div>
            <div className="highflex">
            {posts.map((data)=>{return(
                <div className="highblogcard" key={`data.id${(new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)}`}>
                    <div className="bloghighImage">
                        <img src={Agility} alt="" />
                    </div>
                    <div className="bloghighTitle">
                        <Link to="/read" className="aertTitle">
                            <h2>{data.title}</h2>
                        </Link>
                        <div className="bloghighInfo">
                            <p><span>{data.DatePosted}</span> . {data.approxReadMinutes}min read</p>
                        </div>
                        <Link to="/read" className="aertTitle">
                            <p>{data.body}</p>
                        </Link>
                        <Link to="/read" className="aertReadMore">Read more <span><ArrowRight className="arrowRight"/></span></Link>
                    </div>
                </div>
            )})}
            </div>
        </div>
        <section className="blog-sec-top">
            <h1>Our Blog</h1>
            <p>In a software-defined world, the tenAfric Blog is your place to navigate through the renaissance in technology.</p>
        </section>
        <section className="blog-landing pt-3">
            <div className="blog-landing-wrapper">
                <div className="spot-blog">
                    <div className="spot-image">
                        <img src={Agility} alt="" />
                    </div>
                    <div className="spot-texts">
                        <span className="spot-category">Web Development</span> <span className="spot-date">june 22 2022</span>
                        <h2><Link to="/read">7 Frontend JavaScript Frameworks Loved by Developers in 2022</Link></h2>
                        <p><Link to="/read">is undoubtedly quite popular in building interactive and multimedia content. In 2021, it completed the ninth year in a row as the most commonly used programming language. A JavaScript frontend framework is a collection of JavaScript code libraries that helps developers with standard programming features and tasks. In addition, it offers reusable code components, a universal development environment, compilers, toolsets, code libraries, APIs, etc., to facilitate the app.</Link></p>
                        <div className="spot-author">
                            <img src={African} alt="" />
                            <div className="spot-author-name">
                                <h4>Dennis Kibet</h4>
                                <p>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blogs-showcase">
            <div className="bloghighHeader">
                <div className="blogsFileters">
                    <div className="filter activeFilter">
                        <p>All</p>
                    </div>
                    <div className="filter">
                        <p>nullAPI</p>
                    </div>
                    <div className="filter">
                        <p>Nodejs</p>
                    </div>
                    <div className="filter">
                        <p>php</p>
                    </div>
                    <div className="filter">
                        <p>Python</p>
                    </div>
                    <div className="filter">
                        <p>Ruby</p>
                    </div>
                </div>
                <div className="viewIcon">
                <Search className="filtersIcons" onClick={()=>{showSearch()}}/>
                <Filters className="filtersIcons"/>
                </div>
            </div>
            <div className="highflex">
            {data.blogs.map((data)=>{return(
                <div className="highblogcard" key={`data.id${(new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)}`}>
                    <div className="bloghighImage">
                        <img src={Agility} alt="" />
                    </div>
                    <div className="bloghighTitle">
                        <Link to="/read" className="aertTitle">
                            <h2>{data.title}</h2>
                        </Link>
                        <div className="bloghighInfo">
                            <p><span>{data.DatePosted}</span> . {data.approxReadMinutes}min read</p>
                        </div>
                        <Link to="/read" className="aertTitle">
                            <p>{data.body}</p>
                        </Link>
                        <Link to="/read" className="aertReadMore">Read more <span><ArrowRight className="arrowRight"/></span></Link>
                    </div>
                </div>
            )})}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Blog