import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleTable from './ArticleTable'
import {TextField } from '@material-ui/core';
import ArticleSearchAndFilter from './ArticleSearchAndFilter';


class ShowarticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      fullArticle: [],
      strength:[],
      practices:[],
      claim:[],
      year:[2000, 2021],
    };
   
  }

  componentDidMount() {
    axios
      .get('https://seeds-2021-api.herokuapp.com/api/articles')
      .then(res => {
        this.setState({
          article: res.data,
          fullArticle: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowarticleList');
      })      
  }

  sortFilter = (articlesData, option, keyName) => {
    let simplifyArticles = [];

    if (option.length !== 0) {
      option.forEach(item => {
        if (simplifyArticles.length === 0) {
          simplifyArticles = this.getFilter(articlesData, item, keyName);
        }
        else {
          simplifyArticles = simplifyArticles.concat(this.getFilter(articlesData, item, keyName));
        }
      });
    }

    return simplifyArticles;
  }

  getFilter = (articlesData, item, keyName) => {

    switch (keyName) {
      case "strength":

        return articlesData.filter(one => one.strength_of_evidence.toLowerCase() === item.toLowerCase());

      case "claim":

        return articlesData.filter(one => one.claim.toLowerCase() === item.toLowerCase());

      case "practices":

        return articlesData.filter(one => one.software_engineering_practice.toLowerCase() === item.toLowerCase());

      default:

        return false;
    }
  }  

  
  render() {
    var article = this.state.article;
    console.log("PrintBook: " + article);
    let articleList;

    const handleChange = (event) => {
      console.log(event.target.value);

      var fullArticle = this.state.fullArticle;
      var searchresult = fullArticle.filter(one => one.title.toLowerCase().includes(event.target.value.toLowerCase()));
      console.log(searchresult);

      this.setState({ article: searchresult });

    };

    
    const filterDate = (articlesData) => {
      let simplifyArticles = [];

      simplifyArticles = articlesData.filter(one => this.state.year[0] <= one.year && one.year <= this.state.year[1]);

      return simplifyArticles;

    }



    if (!article || article.length === 0) {
      articleList = "No articles found.";
    } else {

      const optionTitles = ["strength", "claim", "practices"];
      const option = [this.state.strength, this.state.claim, this.state.practices];
      let result = []

      for (let index = 0; index < option.length; index++) {

        if(option[index].length !==0)
        {
          result = this.sortFilter(article, option[index], optionTitles[index]);
          article = result;
        }

      }


      article = filterDate(article);

      if (!article || article.length === 0) 
      {
        articleList = "No articles found.";
      }
      else
      {
        console.log(article);
        articleList = <ArticleTable articleInfo={article} />;
      }
    }

    return (
      <div className="ShowarticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">SEEDS</h2>
            </div>
            <div className="col-md-11">
              <Link to="/moderatorPage" className="btn btn-outline-warning float-right">
                + Moderator
              </Link>
              <br />
            </div>
            <br/>
            <br/>
            <div className="col-md-11">
              <Link to="/showArticleList" className="btn btn-outline-warning float-right">
                + Suggest article addition
              </Link>
              <br />
              <br />
              <TextField id="outlined-basic" label="Search titles..." variant="outlined" onChange={handleChange} />
              <ArticleSearchAndFilter changePractices={newPractices => this.setState({ practices: newPractices })}
                changeStrength={newStrength => this.setState({ strength: newStrength })}
                changeClaim={newClaim => this.setState({ claim: newClaim })}
                changeYear={newYear => this.setState({ year: newYear })} />
              <hr />
            </div>
          </div>
          <div className="l">
            {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowarticleList;