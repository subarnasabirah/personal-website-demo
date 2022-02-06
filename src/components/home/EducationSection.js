import React from 'react';
import './about.css';

export default function EducationSection() {
    return (
        <div className="education">
            <div className="container">
              
                <div className="row__1">
                    <div className="col__12">
                        <div className="about__info__items">
                            <div className="about__info__item">
                                <h1 className="about__info__heading">Education</h1>
                                <div className="education__items">
                                <h1 className="title">Versity</h1>
                                <div className="items">
                                    <div className="item">
                                    <p className="s__name">Dhaka International University</p>
                                    </div>
                                </div>
                                </div>
                                <div className="education__items">
                                <h1 className="title">Collage</h1>
                                <div className="items">
                                    <div className="item">
                                    <p className="s__name">Tangail Polytechnic Institute</p>
                                    </div>
                                </div>
                                </div>
                                <div className="education__items">
                                <h1 className="title">School</h1>
                                <div className="items">
                                    <div className="item">
                                    <p className="s__name">Kalihati R.S. Pilot High School</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="about__info__item">
                                <h1 className="about__info__heading">MY SKILLS</h1>
                                <div className="education__items">
                                <h1 className="title">FrontEnd</h1>
                                <div className="items">
                                    <div className="item__1">
                                        <span className="skills__items">HTML</span>
                                        <span className="skills__items">CSS</span>
                                        <span className="skills__items">JavaScript</span>
                                        <span className="skills__items">REACT</span>
                                    </div>
                                </div>
                                </div>
                                <div className="education__items">
                                <h1 className="title">BackEnd</h1>
                                <div className="items">
                                    <div  className="item__1">
                                        <span className="skills__items">PHP</span>
                                        <span className="skills__items">Laravel</span>
                                        <span className="skills__items">Node</span>
                                    </div>
                                </div>
                                </div>
                                <div className="education__items">
                                <h1 className="title">Design</h1>
                                <div className="items">
                                    <div className="item__1">
                                        <span className="skills__items">Photoshop</span>
                                        <span className="skills__items">Figma</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="about__info__item">
                                <h1 className="about__info__heading">Experiences</h1>
                                <div className="education__items">
                                <h1 className="title">2020-2021</h1>
                                <div className="items">
                                    <div className="item">
                                       <p className="s__name">Front End Developer at Exabyting</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}