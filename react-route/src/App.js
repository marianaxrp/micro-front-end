import React, {useState} from 'react';
import {useEffect} from 'react';
import Parcel from 'single-spa-react/parcel';
import {v4 as uuid} from 'uuid';
import {emitEvent} from '@mx/utils';

const App = ({name}) => {
  const [task, updateTask] = useState('');

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent('mx/react-route/todo/add-task', {
      id: uuid(),
      describe: task,
    });
    updateTask('');
  };

  return (
    <>
      <h1>{name}</h1>
      <h2>React Route</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import('@mx/react-parcel')} />
    </>
  );
};

export default App;
