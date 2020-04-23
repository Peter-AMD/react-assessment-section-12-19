import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Members from './members/Members';
import Posts from './posts/Posts';
import ViewPost from './posts/viewPost/ViewPost';

const App = () => (
  <div className="ui container">
    <Router>
      <Switch>
        <Route exact path="/" component={Members}/>
        <Route exact path="/posts/:id" component={Posts} />
        <Route path="/post/comments/:id/:postId" component={ViewPost}/>
      </Switch>
    </Router>
  </div>
);

export default App;