import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Buttons extends React.Component {



    render() {
        return (
            <div>
                <div className='button1'>
                    <span><Link className='btn-text' to="/">HOME</Link></span>
                    <div className='border1'></div>
                        <div className='border2'></div>
                            <div className='border3'></div>
                </div>
                <div className='button2'>
                    <span><Link className='btn-text' to="/skills">SKILLS</Link></span>
                    <div className='border1'></div>
                        <div className='border2'></div>
                            <div className='border3'></div>
                </div>
                <div className='button3'>
                    <span > <a className='btn-text' href='https://github.com/michal-karbasz' target='_blank'><img src='../icons/github-original.svg' />PORTFOLIO</a></span>
                </div>
                <div className='button4'>
                    <span> <Link  className='btn-text' to="/contact">CONTACT</Link></span>
                    <div className='border1'></div>
                        <div className='border2'></div>
                            <div className='border3'></div>
                </div>
            </div>
        )
    }
}