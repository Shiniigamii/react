import React from 'react';
import auto from './auto';

const auto = [
  {
    marke: 'BMW',
    modell: 'M3',
    baujahr: 2021,
    ps: 510,
  },
  {
    marke: 'Ferrari',
    modell: '488',
    baujahr: 2022,
    ps: 720,
  },
  {
    marke: 'apollo',
    modell: 'project evo',
    baujahr: 2021,
    ps: 780,
  },
];
const autoList = () => {
  return (
    <div>
      {auto.map((auto, index) => (
        <auto key={index} {...auto} />
      ))}
    </div>
  );
};
export default autoList;