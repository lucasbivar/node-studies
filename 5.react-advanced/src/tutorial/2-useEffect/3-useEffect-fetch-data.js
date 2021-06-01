import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  // if we dont pass the dependency array in useEffect above, our application
  // will stay in a infinite loop, because every time that we call the getUsers
  // the function set the user state, and this reload de component again, calling again
  // the useEffect, so, with the empty dependency array our useEffect just will be called
  // one time in the inicial component render

  return (
    <React.Fragment>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
