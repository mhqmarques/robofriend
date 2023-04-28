import React from 'react'
import './index.css'

const RoborCard = ({data}) => {
  return (
      <div className="card">
        <img src={`https://robohash.org/${data.id}?size=230x230`} alt="robots" />
        <div>
          <h2 id="name">{data.name}</h2>
          <p id="email">{data.email}</p>
        </div>
      </div>
  );
}

export default RoborCard