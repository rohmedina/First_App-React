import React from "react";
import "./App.css";

function Helloworld() {
  return <div id="hello">Hello World</div>;
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         This is my component: <Helloworld />
//       </div>
//     );
//   }
// }

// const App = () => (
//   <div>
//     This is my component: <Helloworld />
//   </div>
// );

function App() {
  return (
    <div>
      This is my component: <Helloworld />
    </div>
  );
}

export default App;
