import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import PreviewApp from './PreviewApp';
import createStore from './store';

const creds = {
  email: 'developer******.com',
  password: 'Changeme14!',
};

function renderPreview(config) {
  const store = createStore(config);

  axios.post('/api/users/login', creds).finally(res => {
    ReactDOM.render(<PreviewApp store={store} {...config} />, document.getElementById('root'));
  });
}

export default renderPreview;
