import React from 'react';
import About from './about.jsx';

export default class Man extends React.Component {
    // class={this.state.containerClass} hair={this.state.hairColor}
    state = {
        containerClass: '',
        hairColor: ''
    }

    changeClass = (addClass) => {
        this.setState({
            containerClass: addClass
        })
    }

    changeHair = (hairColor) => {
        this.setState({
            hairColor: hairColor
        })
    }


    render() {
        return(
            <div>
                <div className={this.state.containerClass}></div>
    <About changeClass={this.changeClass} changeHair={this.changeHair} />
    <div className={'container ' + this.state.containerClass}>
    {/* face start */}
        <div className="face-base">
            {/* eyes start */}
            {/* left eye */}
            <div className={"eyebrow-left " + this.state.hairColor}>
                <div className={"eyebrow-triangles-left " + this.state.hairColor}></div>
            </div>
            <div className="eye-border-left">
                <div className={"eye-ball-left " + this.state.hairColor}></div>
            </div>
            <div className="eye-border-top-left"></div>
            <div className="eye-border-left-inner"></div>
                {/*right eye*/}
            <div className={"eyebrow-right " + this.state.hairColor}>
                <div className={"eyebrow-triangles-right " + this.state.hairColor}></div>
            </div>
            <div className="eye-border-right">
                <div className={"eye-ball-right " + this.state.hairColor}></div>
            </div>
            <div className="eye-border-right-inner"></div>
            <div className="eye-border-top-right"></div>
            <div className={"hair-top-6 " + this.state.hairColor}></div>
            {/* eyes end */}
    
            {/* forehead start */}
            <div className="forehead">
                <div className="oval-left"></div>
                <div className="oval-right"></div>
            </div>
            {/* forehead end */}
        </div>
        <div className={"hair-left-1 " + this.state.hairColor}></div>
        <div className={"hair-left-2 " + this.state.hairColor}></div>
        <div className={"hair-left-3 " + this.state.hairColor}></div>
        <div className={"hair-top-1 " + this.state.hairColor}></div>
        <div className={"hair-top-2 " + this.state.hairColor}></div>
        <div className={"hair-top-3 " + this.state.hairColor}></div>
        <div className={"hair-top-4 " + this.state.hairColor}></div>
        <div className={"hair-top-5 " + this.state.hairColor}></div>
        <div className={"hair-right-1 " + this.state.hairColor}></div>
        <div className="ear-left"></div>
        <div className="ear-right"></div>
        <div className="face-bottom">
            <div className="nose-below"></div>
            <div className="glasses-frame-join"></div>
            <div className="nose-upper"></div>
            <div className="nose-bottom-below"></div>
            <div className="mouth"></div>
        </div>
        <div className={"beard-base-left " + this.state.hairColor}>
            <div className={"beard-onbase-left " + this.state.hairColor}></div>
            <div className={"mustache " + this.state.hairColor}></div>
            <div className="half-oval">
                <div className="nose-bottom"></div>
            </div>
        </div>
        <div className={"beard-base-right " + this.state.hairColor}>
            <div className={"beard-onbase-right " + this.state.hairColor}></div>
        </div>
        <div className={"beard-bottom-dark " + this.state.hairColor}></div>
        <div className="face-chin">
            <div className={"beard-bottom  " + this.state.hairColor}></div>
        </div>
        <div className="glasses-frame-left"></div>
        <div className="glasses-frame-right"></div>
        {/* face end */}
        {/* neck start */}
        <div className="neck-upper"></div>
        <div className="neck-lower"></div>
        {/* neck end */}
        <div className="torso-container">
            <div className="collar-left"></div>
            <div className="collar-left-2"></div>
            <div className="collar-right"></div>
            <div className="collar-right-2"></div>
            <div className="torso-left"></div>
            <div className="torso-middle"></div>
            <div className="torso-right"></div>
        </div>
    </div>
</div>
        )
    }
}

