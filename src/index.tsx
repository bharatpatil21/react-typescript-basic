import ReactDOM from 'react-dom';

import Parent from '../src/props/Parent';
import GuestList from '../src/state/GuestList';
import UserSeacher from '../src/refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSeacher />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);