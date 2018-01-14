import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         data: []
      }

      this.setStateHandler = this.setStateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
	findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }
   render() {
      return (
      <div>
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
          <div>
	          <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
	          <div id = "myDiv">NODE</div>
	       </div>
	       </div>
      );
   }
}
export default App;