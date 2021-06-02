import ReactDOM from 'react-dom';

import Parent from '../src/props/Parent';
import GuestList from '../src/state/GuestList';

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);