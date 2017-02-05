import Section from './index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Section />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Section>{ children }</Section>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
