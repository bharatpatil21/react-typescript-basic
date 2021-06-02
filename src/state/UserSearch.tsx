import { useState } from 'react';

const users = [
  { name: 'Bharat', age: 30 },
  { name: 'Abhijeet', age: 24 },
  { name: 'Vishal', age: 23 },
];

const UserSeacher: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <div>UserSearch</div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {user ? (
        <div>
          <div>Name: {user?.name} </div>
          <div>Age: {user?.age} </div>
        </div>
      ) : null
      }
    </div>
  )
};

export default UserSeacher;