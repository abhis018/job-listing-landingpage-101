import React from 'react';
import './Body.css';
import img1 from './account.svg'
import img2 from './eyecam-co.svg'
import img3 from './faceit.svg'
import img4 from './insure.svg'
import img5 from './loop-studios.svg'
import img6 from './manage.svg'
import img7 from './myhome.svg'
import img8 from './photosnap.svg'
import img9 from './shortly.svg'
import img10 from './the-air-filter-company.svg'

const Body = () => {
    return (
        <div className="container">
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img8}/>
                    <div className="col">
                        Photosnap
                        New!
                        Featured
                        <h4>Senior Frontend Developer
                        <div className="field">Frontend</div>
                        <div className="field">Senior</div>
                        <div className="field">HTML</div>
                        <div className="field">CSS</div>
                        <div className="field top">JavaScript</div>
                        </h4>
                        1d ago
                        Full Time
                        USA only
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img6}/>
                    <div className="col"> 
                        Manage
                        New!
                        Featured
                        <h4>Fullstack Developer
                        <div className="field">Fullstack</div>
                        <div className="field">Midweight</div>
                        <div className="field">Python</div>
                        <div className="field">React</div></h4>
                        1d ago
                        Part Time
                        Remote
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img1}/>
                    <div className="col">
                        Account
                        New!
                        <h4>Junior Frontend Developer
                        <div className="field">Frontend</div>
                        <div className="field">Junior</div>
                        <div className="field">JavaScript</div>
                        <div className="field">React</div>
                        <div className="field">Sass</div></h4>
                        2d ago
                        Part Time
                        USA only
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img7}/>
                    <div className="col">
                        MyHome
                        <h4>Junior Frontend Developer
                        <div className="field">Frontend</div>
                        <div className="field">Junior</div>
                        <div className="field">CSS</div>
                        <div className="field">JavaScript</div></h4>
                        5d ago
                        Contract
                        USA only
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img5}/>
                    <div className="col">
                        Loop Studios
                        <h4>Software Engineer
                        <div className="field">Fullstack</div>
                        <div className="field">Midweight</div>
                        <div className="field">JavaScript</div>
                        <div className="field">Ruby</div>
                        <div className="field">Sass</div></h4>
                        1w ago
                        Full Time
                        Worldwide
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img3}/>
                    <div className="col">
                        FaceIt
                        <h4>Junior Backend Developer
                        <div className="field">Backend</div>
                        <div className="field">Junior</div>
                        <div className="field">Ruby</div>
                        <div className="field">RoR</div></h4>
                        2w ago
                        Full Time
                        UK only
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img9}/>
                    <div className="col">
                        Shortly
                        <h4>Junior Developer
                        <div className="field">Frontend</div>
                        <div className="field">Junior</div>
                        <div className="field">HTML</div>
                        <div className="field">JavaScript</div>
                        <div className="field">Sass</div></h4>
                        2w ago
                        Full Time
                        Worldwide
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img4}/>
                    <div className="col">
                        Insure
                        <h4>Junior Frontend Developer
                        <div className="field">Frontend</div>
                        <div className="field">Junior</div>
                        <div className="field">JavaScript</div>
                        <div className="field">Vue</div>
                        <div className="field">Sass</div></h4>
                        2w ago
                        Full Time
                        USA only
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img2}/>
                    <div className="col">
                        Eyecam Co.
                        <h4>Full Stack Engineer
                        <div className="field">Fullstack</div>
                        <div className="field">Midweight</div>
                        <div className="field">JavaScript</div>
                        <div className="field">Python</div>
                        <div className="field">Django</div></h4>
                        3w ago
                        Full Time
                        Worldwide
                    </div>
                </div>
            </div>
            <div className="box shadow-5">
                <div className="grid">
                    <img src={img10}/>
                    <div className="col">
                        The Air Filter Company
                        <h4>Front-end Dev
                        <div className="field">Frontend</div>
                        <div className="field">Junior</div>
                        <div className="field">JavaScript</div>
                        <div className="field">React</div>
                        <div className="field">Sass</div></h4>
                        1mo ago
                        Part Time
                        Worldwide
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;