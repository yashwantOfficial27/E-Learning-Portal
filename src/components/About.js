import React from 'react';
import '../css/About.css';
import Navbar from './Navbar';
import bgImg from './bg1.jpg'
import bgImg2 from './bg2.jpg'

function About() {
    return (
            /* <div className='mb-3'> */
                /* <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide" src={bgImg2} alt="First slide" />
                                <div className="container">
                                    <div className="carousel-caption text-left">
                                        <h1>We are VirenWant</h1>
                                        <p>An organization totally based on Software Devepoment, android development and data science. We provide every needed solution of software problems. WE are Future Of India.</p>
                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="second-slide" src={bgImg2} alt="Second slide" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1>Another example headline.</h1>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
                                <div className="container">
                                    <div className="carousel-caption text-right">
                                        <h1>One more for good measure.</h1>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                 */
                <div>
                <br />
                /* <div className = "cardContainerClass"> */
                    <div className='row'>
                        <div className='col-md-6'></div>
                            <div className="card" style={{"width": "18rem"}}>
                                <div className="card-body column"  style={{}}>
                                    <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='' width='140px' height='140px'/>
                                    <h5 className="card-title">title</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{"width": "18rem"}}>
                                <div className="card-body column"  style={{}}>
                                    <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='' width='140px' height='140px'/>
                                    <h5 className="card-title">title</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{"width": "18rem"}}>
                                <div className="card-body column"  style={{}}>
                                    <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='' width='140px' height='140px'/>
                                    <h5 className="card-title">title</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                    </div>
                </div>
    )
}

export default About;