import React from 'react';
import '../css/components-2.css';

export function Biography(props) {
  return (
    <div className='main-div'>
      <div className='photo-div'>
        <img
          src='https://scontent.fclo8-1.fna.fbcdn.net/v/t39.30808-6/272129792_10221136340703897_1464217504049463615_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zv3qVy5Fu_gAX85Nbf5&_nc_ht=scontent.fclo8-1.fna&oh=00_AfCxELwpmfQY86JNuKozVZqKu7SLTtUlqdjThYXzFt6VRA&oe=63C54FFA'
          alt='Juan tocando violin'
        />
      </div>
      <aside className='text-div'>
        <h1 className='title-h1'>Mira mamor lo que te hice 💖 {props.name}</h1>
        Mile, mi amor, contigo a mi lado mi vida es un canto, un poema escrito,
        tu amor es mi rima, mi verdadero guía, juntos nuestros corazones nunca
        se dividen. Te amo.
      </aside>
    </div>
  );
}
