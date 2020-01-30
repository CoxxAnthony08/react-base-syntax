import React from 'react';
import Person from './Person/Person'
import Human from './Human/index'

class App extends React.Component {

  state = {
    persons: [
      {name: 'Test User', age: 30},
      {name: 'Test User2', age: 50},
      {name: 'Test User3', age: 26}
    ],
    clicked: 0
  }

  switchNameHandler(){
    console.log('test')
    this.setState((state) => {
      return {clicked: state.clicked + 1}
    })
    //debugger
  }

  render(){
    let age = 33
    return (
      <div>
        <button onClick={()=>{
          this.switchNameHandler()
        }}>Switch Name</button>
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
        <p>using event handlers</p>
        <p>button clicked: {this.state.clicked}</p>
      </div>
    )
  }
}

export default App;
