import Wrapper from './index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Wrapper />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Wrapper>{ children }</Wrapper>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
