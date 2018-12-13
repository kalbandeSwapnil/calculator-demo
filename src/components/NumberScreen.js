import React from 'react';

export default class NumberScreen extends React.Component{
    takeInput(inputValue){
         this.props.giveInput(inputValue.target.value);
    }

    clearInput(){
        this.props.clearInput();
    }
    render() {
        let numbers = [];
        for(let index =0 ;index< 10; index++){
            numbers.push(
                <button className="buttonNumber" value ={index} onClick={this.takeInput.bind(this)}>{index}</button>
            )
        }
        return( 
            <div className = "numbers">
                {numbers}
                <button className="buttonClear" onClick={this.clearInput.bind(this)}>Clear</button>
            </div>
        )

    }

}

