import React from 'react';

let name = 'Myself';

const NameRaw = () => {
  return React.createElement('div', null, `Hello ${name}`);
};

export default NameRaw;
