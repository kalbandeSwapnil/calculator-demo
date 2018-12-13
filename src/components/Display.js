import React from 'react';
import { nextTick } from 'q';

export default class Display extends React.Component{
    constructor(props) {
        super(props)
    }

render() {
    return( 
        <div>
           <input className ="displayScreen"  disabled value ={this.props.value}/>
        </div>
    )

}


}

