import React, { Component } from 'react';
import { Main, UserPage, About, SearchUsers } from './routes';
import { Layout } from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.scss';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/' component= { Main } />
              <Route path="/user/:login" component = { UserPage } />
              <Route path="/Home" component = { Main } />
              <Route path="/About" component = { About } />
              <Route path="/Portfolio" component = { () => <h3>Portfolio</h3> } />
              <Route path="/Featured" component = { () => <h3>Featured</h3> } />
              <Route path="/SearchUsers" component = { SearchUsers } />
              <Route path="/Contacts" component = { () => <h3>Contacts</h3> } />
              <Route path="/404" component = { () => <div>Not Found</div> } />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

