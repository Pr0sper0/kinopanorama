import React, { Component } from 'react';
import { articles } from '../utils/data';
import ArticleList from './ArticleList';
import { Link } from 'react-router-dom';

import Strapi from 'strapi-sdk-javascript/build/main';


const apiUrl = process.env.API_URL || 'https://kinoserver.herokuapp.com';
let strapi = "";


class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true
        }
    }


    async componentDidMount() {
        if (this.state.articles.length == 0) {
            this.interval = await setInterval(async () => {
                try {
                    await this.strapiRequest();
                } catch (err) {
                    console.log('Cant get data' + err);
                }
            }, 2000)
        }

    }

    async strapiRequest() {
        strapi = new Strapi(apiUrl);
        const response = await strapi.request('POST', '/graphql', {
            data: {
                query: `query {
        articles(limit: 10) {
         _id
         Description
        Category
        Content
        Image {
          _id
          url
          mime
        }
        media_url
        }
      }`
            }
        })
        console.log(this.state.articles);
        this.setState({
            articles: response.data.articles, loading: false
        })
        this.articlesState();
    }

    articlesState() {
        if (this.state.articles.length != 0) clearInterval(this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        //console.log('length: ' + this.state.articles.length);
        return (
            <div>
                {/*<!-- Showcase -->*/}
                <header id="showcase">
                    <div className="container">
                        <div className="showcase-container">
                            <div className="showcase-content">
                                <div className="category category-films">Ukrainian cinematography</div>
                                <h1>Top Ukrainian Films</h1>
                                <p>
                                    Over the past few years, Ukrainian cinema has been rising from the
                                    ashes. The Ukrainian movie industry has become more genuine and
                                    diverse in its expression. Here are some of the brightest
                                    premieres that are worth checking out.
                            </p>
                                <Link to="/about" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/**
             * Section cards
             */}

                <section id="home-articles" className="py-2">
                    <div className="container">
                        <h2>Editor Picks</h2>
                        <div className="articles-container">
                            <ArticleList loading={this.state.loading} elements={this.state.articles} apiUrl={apiUrl} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
