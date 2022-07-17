import React, { Fragment } from 'react'
import '../styles/css/specialization.css'
import { Link } from 'react-router-dom'

const Specialization = () => {
    return(
        <Fragment>
            <div className="specialization">
                <div className="specWrapper">
                    <h1 className="specializationHeader text-6xl mb-5">we specialize in</h1>
                    <p className="spectxts text-center text-2xl mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, exercitationem? Consequatur, impedit facilis?</p>
                    <div className="specCards flex justify-center items-center">
                        <div className="specCrds">
                            <h2 className="crdsTitle">Custom software development</h2>
                            <p>Hire us and we'll become a dedicated part of your team</p>
                            <Link to="" className="specKnowMore">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">Full-Project design and development</h2>
                            <p>Hire a team of proffesionals to design and develop and launch your project</p>
                            <Link to="" className="specKnowMore">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">UI/UX design and development</h2>
                            <p>Hire us a</p>
                            <Link to="" className="specKnowMore">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle">Graphi design and animation</h2>
                            <Link to="" className="specKnowMore">know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Specialization