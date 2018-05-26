import React from 'react';

export default class Background extends React.Component {
    state = {
        gender: undefined,
        question: "Hello, I'm Michał. What's your name?",
        placeholder:'Tell me your name...',
        input: '',
        name: '',
        stage: 1,
        formPosition: ''
    }

    handleUserInput = (e) => {
        this.setState({input: e.target.value })
        if (this.state.stage === 1) {
        this.setState({name: e.target.value})   
        }
    }

    moveForm = () => {
        this.setState({formPosition: 'active'})
        if(typeof this.props.changeClass === 'function') {
            this.props.changeClass('active');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.input == '' && this.state.stage === 1) {
            this.setState({placeholder: "Write your name or there will be no fun!"});
        } else if (this.state.stage === 1) {

            fetch(`https://gender-api.com/get?name=${this.state.name}&key=vsUDVXnbxmAFegzGXR`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Blad sieci!');
                }
            })

            //check for gender and assign stage 2.1 = female, 2.2 if male
            .then(data => {
                if (data.gender == 'female') {
                this.setState({
                    gender: data.gender,
                    input: '', placeholder: `Type dark, brown or blonde`, stage:2.1, question:`A woman visiting my site! Pleasure to meet you ${this.state.name}.
Tell me, do you prefer dark-haired, brown-haired or blonde men?`
                })
            } else {
                this.setState({
                    gender: data.gender,
                    input: '', placeholder: `Type yes or no`, stage:2.2, question:`Hello there, ${this.state.name}. You're a man. 
There's a high probability that you're interested in football.`
                })
            }
                
            })
            .catch(err => console.log(err));
        }
// WOMEN COVERSATION STEP 2.1

        if(this.state.input == '' && this.state.stage === 2.1) {
            this.setState({placeholder: `Type dark, brown or blonde, please`});
        } else if (this.state.input == "brown" && this.state.stage === 2.1) {
            this.setState({input: '', question:`No need to dye my hair for you then.
Now, what do you do for a living?`, placeholder:"I'm a...", stage:4});
        } else if (this.state.input == "dark" && this.state.stage === 2.1) {
            this.setState({input: '', question:`Just give me a sec...Here you go!
Now, what do you do for a living?`, placeholder:"I'm a...", stage:4});
            if(typeof this.props.changeHair === 'function') {
                this.props.changeHair('dark');
            }
        } else if ((this.state.input == "blonde" || this.state.input == "blond")  && this.state.stage === 2.1) {
            this.setState({input: '', question:`Just give me a sec...Here you go!
Now, what do you do for a living?`, placeholder:"I'm a...", stage:4});
            if(typeof this.props.changeHair === 'function') {
                this.props.changeHair('blonde');
            }
        }

        // FINAL WOMAN
if(this.state.input == '' && this.state.stage === 4) {
            
    this.setState({placeholder: `Type anything`});
} else if (this.state.stage === 4) {
    if(typeof this.props.changeClass === 'function') {
        this.props.changeClass('active2');
    }
    this.setState({input: '', question:`That's a great thing that you do ${this.state.name}.
Now let me tell you something about myself. You know
my name already and you probably know that I code. 
Yup, I'm a front-end developer with a strong affinity
for Javascript. And yes, I do like to play with CSS 
animations. I might be a begginer after only 6-week-long
coding bootcamp at Coder's Lab but I hope you liked what
I do. By the way - if you're interested I'm ready to be 
hired! Please, check my skills and portfolio and take care!` , placeholder:"Bye!", stage:1});
}

//Men conversation step 2.2 & 3.1 &3.2

if(this.state.input == '' && this.state.stage === 2.2) {
            
    this.setState({placeholder: `Type yes or no, please`});
} else if (this.state.input == "Yes" || this.state.input == "yes" && this.state.stage === 2.2) {
    this.setState({input: '', question:`Real Madrid or rather Barca?` , placeholder:"Type Real or Barca", stage:3.1});
} else if ((this.state.input == "No" || this.state.input == "no") && this.state.stage === 2.2) {
    this.setState({input: '', question:`Then you will probably like this one!
Just give me a sec!`, placeholder:"Gathering power...", stage:3});
    if(typeof this.props.changeHair === 'function') {
        this.props.changeHair('blonde');
    }
    if(typeof this.props.changeClass === 'function') {
        this.props.changeClass('sayan'); 
    } 

if(this.state.input == '' && this.state.stage === 3.1) {
            
    this.setState({placeholder: `Type Real or Barca, please`});
} else if (this.state.input == "Real" && this.state.stage === 3.1) {
    this.setState({input: '', question:`Just give me a sec...Here you go!
    Now, what do you do for a living?` , placeholder:"I'm a...", stage:4});
} else if (this.state.input == "Barca" && this.state.stage === 3.1) {
    this.setState({input: '', question:`Just give me a sec...Here you go!
    Now, what do you do for a living?`, placeholder:"I'm a...", stage:4});
}
// FINAL
if(this.state.input == '' && this.state.stage === 4) {
            
    this.setState({placeholder: `Type anything`});
} else if (this.state.stage === 4) {
    this.setState({input: '', question:`That's a great thing that you do ${this.state.name}.
Now let me tell you something about myself. You know
my name already and you probably know that I code. 
Yup, I'm a front-end developer with a strong affinity
for Javascript. And yes, I do like to play with CSS 
animations. I might be a begginer after only 6-week-long
coding bootcamp at Coder's Lab but I hope you liked what
I do. By the way - if you're interested I'm ready to be 
hired! Please, check my skills and portfolio and take care!` , placeholder:"Bye!", stage:1});
}

}
}


    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.state.formPosition}>
                <label style={{whiteSpace: 'pre'}}>{this.state.question}<br/>
                    <input onClick={this.moveForm} onChange={this.handleUserInput} className='about-input' placeholder={this.state.placeholder} value={this.state.input}/>
                </label>
                <input type='submit' className='about-submit' value='Send'/>
            </form>
        )
    }
}