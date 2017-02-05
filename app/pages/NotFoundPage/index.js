/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Container from 'Container';
import Wrapper from 'Wrapper';
import Grid from 'grid-styled';
import Section from 'Section';
import Building from 'Building';

import H1 from 'H1';
import A from 'A';
import P from 'P';

import styles from './styles.css';

export function NotFound() {
  return (
    <Container>
      <Wrapper>
        <Grid md={2 / 5} align="middle">
          <Section>
            <H1>404 Error</H1>
            <P className={ styles.mb0 }>It seems the page you were looking for doesn't exist.</P>
            <A href="/">Back to home</A>
          </Section>
        </Grid>
        <Grid md={3 / 5} align="middle">
          <Building />
        </Grid>
      </Wrapper>
    </Container>
  );
}

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(NotFound);
