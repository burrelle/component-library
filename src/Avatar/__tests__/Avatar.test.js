import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../index';

const [name, color, height, width] = ['Tim Cook', 'green', 12, 12];
const wrapper = shallow(<Avatar name={name} color={color} height={height} width={width} />);

describe('<Avatar />', () => {
  it('should render with parameters', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have two letters', () => {
    expect(wrapper.text().length).toBe(2);
  });
});
