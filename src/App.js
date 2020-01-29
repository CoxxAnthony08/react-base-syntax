import React from 'react';
import Person from './Person/Person'
import Human from './Human/index'

class App extends React.Component {

  state = {
    persons: [
      {name: 'Test User', age: 30},
      {name: 'Test User2', age: 50},
      {name: 'Test User3', age: 26}
    ]
  }

  render(){
    let age = 33
    return (
      <div>
        <button>Switch Name</button>
        <Person name="John" age="26" hobbies={['Skating', 'Dancing', 'Running']}/>
        <Person name="Jane" age={age}>My Hobbies: {['Skating', 'Dancing', 'Running']}</Person>
        <Person name="James" age={Math.floor(Math.random() * 30)} />
        <Human name="James" age="30" />
        <Human name="John" age={Math.floor(Math.random() * 30)} />
        test
        <p>using state</p>
        {
          this.state.persons && 
          this.state.persons.map((value, index) => {
            return <Person key={index} name={value.name} age={value.age} />
          })
        }
      </div>
    )
  }
}

export default App;
