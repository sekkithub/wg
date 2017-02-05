import React from 'react';

import styles from './styles.css';

function Section(props) {
  return (
    <section className={ styles.section } { ...props } />
  );
}

export default Section;
