import React from 'react';

class Human extends React.Component{
    render(){
        return(
            <div>
                <p>Hello, Im {this.props.name}, i am {this.props.age} years old.</p>
            </div>
        )
    }
}

export default Human;