import React, { Fragment } from 'react'
import '../styles/css/specialization.css'
import { Link } from 'react-router-dom'

const Specialization = () => {
    return(
        <Fragment>
            <div className="specialization">
                <div className="specWrapper">
                    <h1 className="specializationHeader text-6xl mb-5">what we do at tenAfric</h1>
                    <p className="spectxts text-center text-2xl mb-4">transforming your dreams into reality</p>
                    <div className="specCards flex justify-center items-center">
                        <div className="specCrds">
                            <h2 className="crdsTitle">Custom software development</h2>
                            <p className="mb-2">Hire us and we'll become a dedicated part of your team</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">Full-Project design and development</h2>
                            <p className="mb-2">Hire a team of proffesionals to design and develop and launch your project</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">UI/UX design and development</h2>
                            <p className="mb-2">Hire us and we'll become a dedicated part of your team</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">Graphic design and animation</h2>
                            <p className="mb-2">Hire us and we'll become a dedicated part of your team</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Specialization