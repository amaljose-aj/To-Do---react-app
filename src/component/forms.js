import React, { Component } from 'react'

export default class Forms extends Component {

handler(event){
    console.log(event.target.value);
};
    render() {
        return (
            <div>
                <h1><u>Forms</u></h1>
            <form>
              
                <input type="text" onChange={this.handler} />
            </form>
            </div>
        );
    }
}
