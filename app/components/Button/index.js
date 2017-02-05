/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';

import styles from './styles.css';

function Button(props) {
  const classNames = [styles.button];

  if (props.className) classNames.push(props.className);

  return (
    <div className={classNames.join(' ')}>
      <a className={styles.buttonItem} href={props.href}>
        <span className={styles.buttonText}>{props.children}</span>
      </a>
    </div>
  );
}

Button.propTypes = {
  className: React.PropTypes.string,
  href: React.PropTypes.string,
};

export default Button;
