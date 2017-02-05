import Container from './index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Container />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Container>{ children }</Container>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
