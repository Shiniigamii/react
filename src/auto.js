import React from 'react';

const auto = ({ marke, modell, baujahr,ps }) => {
  return (
    <div>
      <h2> {marke} {modell} {baujahr}</h2>
      <img alt={`{marke} {modell}`} />
      <p>PS: {ps}</p>
    </div>
  );
};

export default auto