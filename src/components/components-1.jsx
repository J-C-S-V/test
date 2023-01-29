import React from 'react';
import '../css/components-1.css';

export function Lego(props) {
  return (
    <div className='component-div'>
      <h1>I'm not sure if this is a {props.title} </h1>
      <img
        className='image-function-component'
        src={require(`../img/${props.url}.jpg`)}
        alt='code of function component'
      />
    </div>
  );
}
