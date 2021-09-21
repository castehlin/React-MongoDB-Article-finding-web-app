import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import ShowBookList from './components/ShowBookList';
// import ShowBookDetails from './components/ShowBookDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';
import ShowArticleList from './components/ShowArticleList';
import SuggestArticleUpload from './components/SuggestArticleUpload';
import Moderator from './components/Moderator';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowArticleList} />
          <Route path="/showArticleList" component={SuggestArticleUpload} />
          <Route path="/moderatorPage" component={Moderator} />
        </div>
      </Router>
    );
  }
}

//  <Route path='/edit-book/:id' component={UpdateBookInfo} />
//  <Route path='/show-book/:id' component={ShowBookDetails} />
// useless paths for now, taking them out here till they are removed completely

export default App;
