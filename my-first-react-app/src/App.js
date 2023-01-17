import { fireEvent } from '@testing-library/react';
import './App.css';
import { RoleClass, Mage, Warrior } from './RoleClass';

const App = () => {
  return (
  <>
    <div classname="appbackdrop">
      <div className="App">
        <h1>Wow Companion Application</h1>
        <RoleClass {...Mage}/>
        <buttongroup>
          <button>Mage</button>
          <button>Rogue</button>
          <button>Shaman</button>
          <button>Warrior</button>
          <button>Warlock</button>
          <button>Priest</button>
        </buttongroup>
      </div>
      <div className='armorBox'>
        <tr>Headpiece</tr>
        <tr>Shoulders</tr>
        <tr>Chest</tr>
        <tr>legs</tr>
        <tr>Boots</tr>
      </div>
    </div>
  </>
  );
}

export default App;
