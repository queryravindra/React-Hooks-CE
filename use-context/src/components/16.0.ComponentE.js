// import React from 'react';
// import ComponentF from './16.0.ComponentF';

// function ComponentE() {
//   return (
//       <div>
//         <ComponentF />
//       </div>
//   );
// }

// export default ComponentE;

// 17.Part-3

import React,{ useContext } from 'react';
import ComponentF from './16.0.ComponentF';
import { UserContext, ChannelContext } from '../App';

function ComponentE() {

  const user = useContext(UserContext);  // returns context value
  const channel = useContext(ChannelContext);  

  return (
      <div>
        {user} - {channel}
      </div>
  );
}

export default ComponentE;