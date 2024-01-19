import React, { useState } from 'react';
// import PetItem from './components/PetItem';
import PetList from './components/PetList';
import ToggleButton from './components/ToggleButton';
import './App.css';

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const pets = [
    {
      name: "Doge",
      age: 1,
      owner: "John",
    },
    {
      name: "Nyan Cat",
      age: 2,
      owner: "", 
    },
    {
      name: "Piggy",
      age: 0, 
      owner: "Jane",
    },
  ];

  return (
    <div className="App">
      <div className='container'>
        <ToggleButton
          state={show}
          setState={setShow}
          buttonText={show ? 'hide' : 'show'}
        />
        { show && (
          <>
            <h1>Pets</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <PetList pets={pets} />
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
