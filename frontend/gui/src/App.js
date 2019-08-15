import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Layout1 from './containers/Layout';
import ArticleList from './containers/ArticleListView';
import BaseRuoter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component{
  render (){
    return (
      <div className="App">
        <Router>
          <Layout1>
            <BaseRouter />
          </Layout1>
        </Router>
        
      </div>
    );

  }

  
  
}

export default App;
