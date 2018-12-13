import React from 'react';


export default class OperatorScreen extends React.Component{

    takeInput(inputValue){
        this.props.giveInput(inputValue.target.value)
    }
   
    render() {
        return( 
            <div className ="operator">
                <button className="buttonNumber" value ='+' onClick={this.takeInput.bind(this)}>+</button>
                <button className="buttonNumber" value = '-' onClick={this.takeInput.bind(this)}>-</button>
                <button className="buttonNumber"  value ='/'onClick={this.takeInput.bind(this)}>/</button>
                <button className="buttonNumber" value ='*' onClick={this.takeInput.bind(this)}>*</button>
                <button className="buttonNumber" value ='=' onClick={this.takeInput.bind(this)}>=</button>
            </div>
        )

    }


}

