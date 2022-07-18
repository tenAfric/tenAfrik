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
                    <div className="specCards grid">
                        <div className="specCrds">
                            <h2 className="crdsTitle mt-4">Custom software <br/>development</h2>
                            <p className="mb-2 mt-2">Hire an individual or a custom group of professionals <br/>that will be formed by us and will become a dedicated <br/>part of your team.</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle mt-4">Full-Project design <br/>& development</h2>
                            <p className="mb-2 mt-2">Hire a team of dedicated professionals necessary to <br/>design, develop and launch your project.</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle mt-4">UI/UX design <br/>& development</h2>
                            <p className="mb-2 mt-2">Hire us and we'll become a dedicated part <br/>of your team</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                        <div className="specCrds">
                            <h2 className="crdsTitle mt-4">Graphic design <br/>& animation</h2>
                            <p className="mb-2 mt-2">Hire us and we'll become a dedicated part <br/>of your team</p>
                            <Link to="" className="specKnowMore mb-2 mt-2">know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Specialization