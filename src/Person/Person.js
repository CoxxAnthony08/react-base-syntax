import React from 'react';

function person(props){
    return (
        <div>
            <p>I'm {props.name}, i am {props.age} years old.</p>
            {props.hobbies &&
                <div>
                    Hobbies:
                    <ul>
                        {
                            props.hobbies && props.hobbies.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })
                        }
                    </ul>
                </div>
            }
            {props.children}
           
        </div>
    )
}

export default person;