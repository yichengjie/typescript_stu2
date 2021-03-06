
'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' ;
import './styles/index.css' ;

import './styles/jquery_ui.datepicker-modify.css';
import './styles/jquery-ui-timepicker-addon.css' ;
import './lib/tui-core/index.js' ;
import './lib/tui-drag/index.js' ;
import './lib/jq-datepicker/index.js' ;

//引入组件
import CreateBaseFormView from './views/UserInfoList.jsx' ;
import CreateBaseFormCustomView from './views/custom.jsx' ;
import CreateBaseFormCustomView2 from './views/custom2.jsx' ;
let ShowView = CreateBaseFormView ;
//let ShowView = CreateBaseFormCustomView ;
//let ShowView = CreateBaseFormCustomView2 ;

ReactDOM.render(
  <ShowView />,
  document.getElementById('app')
);