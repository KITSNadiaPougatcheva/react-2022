import React from 'react';

const MenuItem = (props) =>
    React.createElement('li', null, React.createElement('a', props, props.text));

export default MenuItem;
