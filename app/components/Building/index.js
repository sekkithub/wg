/**
*
* Building
*
*/

import React from 'react';

import BuildingImage from './building.png';

import Img from 'Img';

import styles from './styles.css';

function Building() {
  return (
    <div className={ styles.container }>
      <Img className={ styles.image } src={ BuildingImage } alt="Windmill Green Illustration" />
    </div>
  );
}

export default Building;
