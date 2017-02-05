import React from 'react';

import styles from './styles.css';

function Container(props) {
  return (
    <div className={ styles.container } { ...props } />
  );
}

export default Container;
