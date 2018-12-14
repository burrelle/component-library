import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '..';
import '../../index.css';

storiesOf('Avatar', module).add('default', () => {
  const avatars = [
    { name: 'Tim Cook', color: 'green', height: 12, width: 12 },
    { name: 'Bill Gates', color: 'yellow', height: 16, width: 16 },
    { name: 'Santa Claus', color: 'red', height: 24, width: 24 }
  ];
  return (
    <div className="flex">
      {avatars.map(({ name, color, height, width }) => {
        return (
          <div className="mr-2 flex items-end">
            <Avatar name={name} color={color} height={height} width={width} />
          </div>
        );
      })}
    </div>
  );
});
