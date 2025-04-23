import React from 'react';
 
const styleArgument = {
  color: 'red',
  cursor: 'pointer',
  fontSize: '32px',
  textAlign: 'center',
  marginTop: '50px',
};
 
const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + '被點了';
};
 
function App() {
  return (
<div className="App">
<h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
</h1>
</div>
  );
}
 
export default App;
 