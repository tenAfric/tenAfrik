import React,{ Fragment } from 'react'
import '../styles/css/blogHome.css'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/arrowRight.svg'
import BlogIOne from '../assets/images/relax.jpg'
import BlogITwo from '../assets/images/african_beauty.jpg'
import BlogIThree from '../assets/images/beautiful_girl_coding.jpg'

const BlogHome = () => {
  return (
    <Fragment>
        <section className="bloghigh">
            <div className="highwrapper">
                <div className="highcontainer">
                    <div className="bloghighHeader">
                        <h1>Highlights from our blog</h1>
                        <Link to="" className="blogLinks">All blogs <span><ArrowRight className="arrowRight"/></span></Link>
                    </div>
                    <div className="highflex">
                        <div className="highblogcard pb-2">
                            <div className="bloghighImage">
                                <img src={BlogIOne} alt="" />
                            </div>
                            <div className="bloghighTitle">
                                <Link to="" className="blogLinks">
                                    <h2>Daraja API intergrate M-Pesa payment to your business using PHP-CUrl</h2>
                                </Link>
                                <p className="blogHighMeta"><span>july 19 2022</span> . <span>10 min</span></p>
                                <Link to="" className="blogLinks">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum, eligendi exercitationem veniam mollitia labore laborum.
                                    </p>
                                </Link>
                                <Link to="" className="blogLinks blogReadMore">read more</Link>
                            </div>
                        </div>
                        <div className="highblogcard pb-2">
                            <div className="bloghighImage">
                                <img src={BlogITwo} alt="" />
                            </div>
                            <div className="bloghighTitle">
                                <Link to="" className="blogLinks">
                                    <h2>Getting started with null api (installation and Authentication)</h2>
                                </Link>
                                <p className="blogHighMeta"><span>july 19 2022</span> . <span>10 min</span></p>
                                <Link to="" className="blogLinks">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum, eligendi exercitationem veniam mollitia labore laborum.
                                    </p>
                                </Link>
                                <Link to="" className="blogLinks blogReadMore">read more</Link>
                            </div>
                        </div>
                        <div className="highblogcard pb-2">
                            <div className="bloghighImage">
                                <img src={BlogIThree} alt="" />
                            </div>
                            <div className="bloghighTitle">
                                <Link to="" className="blogLinks">
                                    <h2>PHP connecting to your mysql database</h2>
                                </Link>
                                <p className="blogHighMeta"><span>july 19 2022</span> . <span>10 min</span></p>
                                <Link to="" className="blogLinks">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum, eligendi exercitationem veniam mollitia labore laborum.
                                    </p>
                                </Link>
                                <Link to="" className="blogLinks blogReadMore">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default BlogHome