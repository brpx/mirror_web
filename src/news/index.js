import React from 'react';
import $ from 'jquery';
import moment from 'moment';

const API_KEY = 'fde65d3d26794e4a8ede68c6bd851e7e';
const API = ['https://newsapi.org/v1/articles?sortBy=top&apiKey=', API_KEY].join('');

function buildUri(source) {
  return [
    API,
    ['&source=', source].join(''),
  ].join('');
}

class News extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    // sources: https://newsapi.org/sources
    const source = this.props.params.source || 'techcrunch';
    $.ajax(buildUri(source), {
      method: 'GET',

      dataType: 'json',
    }).done((res) => {
      this.setState({
        articles: res.articles.map((el) => {
          const o = Object.assign({}, el);
          o.publishedAt = moment(el.publishedAt).format('LLL');
          return o;
        }),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.articles.map((el, idx) =>
            <li key={idx}>
              <article>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <span>Published at {el.publishedAt}</span>
              </article>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

News.propTypes = {
  params: React.PropTypes.object,
};

export default News;
