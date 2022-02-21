class Head extends React.Component {
 state = { messageDisplayed: false };
 componentDidMount() {
   this.setState({ messageDisplayed: true });
 }
 render() {
   console.log("Head!!!");
   return (
     <div className="App">
       <Child/>
     </div>
   );
 }
}
class Child extends React.Component {
 constructor(props) {
   super(props);
   this.state = { message: "Hello"};
 }  
 render() {
   console.log("Message");
   return (
     <div>
       <p>{this.state.message}</p>
     </div>
   );
 }
}