
import React from 'react';


export default class Skills extends React.Component {

    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {

        const todevelopStyle = {
            visibility: this.state.clicked ? 'visible' : 'hidden',
        }
        
        return (
            <div className='main-container'>
                <div className='flex-container'>
                    <img src='../icons/html5.svg' className='icon html' id='1' />   
                    <img src='../icons/javascript-original.svg' className='icon js' id='4' />
                    <img src='../icons/rwd.png' className='icon rwd' id='7' />   
                    <img src='../icons/css3.svg' className='icon css' id='2' />
                    <img src='../icons/es6-logo.png' className='icon es6' id='5'/>
                    <img src='../icons/webpack-plain-wordmark.svg' className='icon webpack' id='8' />  
                    <img src='../icons/sass-original.svg' className='icon sass' id='3' />   
                    <img src='../icons/jquery-plain-wordmark.svg' className='icon jquery' id='6' />   
                    <img src='../icons/gulp-plain.svg' className='icon gulp' id='9' />              
                    <div className='flex-container-side'>
                        <img src='../icons/react.png' className='react' />           
                    </div>
                    <div className='flex-container-below' id='11'>
                        <div onClick={this.handleClick}className='skills-to-develop'>areas I'd like to develop next:</div>
                        <img src='../icons/nodejs-plain-wordmark.svg' className='icon node' style={todevelopStyle}/>   
                        <img src='../icons/photoshop-plain.svg' className='icon ps' style={todevelopStyle} />
                        <img src='../icons/illustrator-plain.svg' className='icon il' style={todevelopStyle} />                
                    </div>
                    </div>
                </div>
        )
    }
}