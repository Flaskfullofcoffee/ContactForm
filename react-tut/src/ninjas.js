import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return(
      <div className="ninja" key={ninja.id }>
        <ul>
          <li>Name: {ninja.name}</li>
          <li>Age: {ninja.age}</li>
          <li>Belt: {ninja.belt}</li>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
        </ul>
        <br />
      </div>
    )
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas
