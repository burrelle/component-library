import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ name, color, height, width }) {
  const propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  };

  const initials = name => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  };

  const style = `bg-${color}-dark h-${height} w-${width} rounded-full text-white flex justify-center items-center shadow-inner`;

  return <div className={style}>{initials(name)}</div>;
}
