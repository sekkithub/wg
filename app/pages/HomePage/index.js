/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Container from 'Container';
import Wrapper from 'Wrapper';
import Grid from 'grid-styled';
import Building from 'Building';
import Section from 'Section';
import Logo from './logo.svg';
import A from 'A';
import P from 'P';
import Button from 'Button';
import styles from './styles.css';

export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Grid md={2 / 5} align="middle">
            <Section>
              <A href="/" className={ styles.logoLink }><Logo /></A>
              <P>
                Life's too short to spend in a humdrum office. <br />
                We're currently building a new type of place to do business in the heart of Manchester.
              </P>
              <Button href="mailto:sample@wg.com">Register your interest here</Button>
            </Section>
          </Grid>
          <Grid md={3 / 5} align="middle">
            <Building />
          </Grid>
        </Wrapper>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(HomePage);
