import React from 'react';
import './Calculator.css';
import Display from './Display';
import NumberScreen from './NumberScreen';
import OperatorScreen from './OperatorScreen';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.operator = ''
        this.state = {
            numberValue : ''
        }
    }
    notifyScreen (inputValue) {
        this.setState({
            numberValue: this.state.numberValue + inputValue
        })
    }
    operate(inputValue){
        if(inputValue !== "="){
            this.operator = inputValue;
            this.notifyScreen(inputValue);
        }
        else {
            let arrOfTwo = this.state.numberValue.split(this.operator);
            let result;
            switch(this.operator){
                case '+':
                result = parseInt(arrOfTwo[0])+parseInt(arrOfTwo[1]);
                break;
                case '-':
                result =  parseInt(arrOfTwo[0])-parseInt(arrOfTwo[1]);
                break;
                case '*':
                result =  parseInt(arrOfTwo[0])*parseInt(arrOfTwo[1]);
                break;
                case '/':
                result =  parseInt(arrOfTwo[0])/parseInt(arrOfTwo[1]);
                break;
                default:
                result = 0;
                break;
                
            }
            this.setState ({
                numberValue : result
            })
        }
    } 
    clearInput () {
        this.setState ({
            numberValue : 0
        })
    }
    render() {
        return( 
            <div className = "calculator">
                <Display value = {this.state.numberValue}/>
                <div className ="screen">
                    <NumberScreen giveInput={this.notifyScreen.bind(this) } clearInput={this.clearInput.bind(this)}/>
                    <OperatorScreen giveInput={this.operate.bind(this)}/>
                </div>
            </div>
        )

    }


}

