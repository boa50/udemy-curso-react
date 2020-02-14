import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li>OK - Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li>OK - Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li>OK - Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>OK - Pass the course ID to the "Course" page and output it there</li>
            <li>OK - Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>OK - Load the "Course" component as a nested component of "Courses"</li>
            <li>OK - Add a 404 error page and render it for any unknown routes</li>
            <li>OK - Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          <nav>
            <ul>
              <li><NavLink to="/users" exact>Users</NavLink></li>
              <li><NavLink to="/courses" exact>Courses</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 - Not Found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
