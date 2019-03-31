import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
      return <div>正在加载中....</div>
  }
});
export default ()=><LoadableComponent/>
