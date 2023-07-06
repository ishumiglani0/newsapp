import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
    searchquery: "",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    searchquery: PropTypes.string,
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }
  search = async (q) => {
    let url = `https://newsapi.org/v2/top-headlines?q=${q}&apiKey=4e938d94c3dd4ab1aba2625e046ef639`;

    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.searchquery !== this.props.searchquery) {
      this.search(this.props.searchquery);
    }
    if (prevProps.mode !== this.props.mode) {
      document.querySelector("#root").style.backgroundColor =
        this.props.mode === "light" ? "white" : "black";
      document.querySelector("#root").style.color =
        this.props.mode === "light" ? "black" : "white";
      document.querySelector("body").style.backgroundColor =
        this.props.mode === "light" ? "white" : "black";
      document.querySelector("body").style.color =
        this.props.mode === "light" ? "black" : "white";
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e938d94c3dd4ab1aba2625e046ef639&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=4e938d94c3dd4ab1aba2625e046ef639&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true,
  //   });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  // handleNextClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=4e938d94c3dd4ab1aba2625e046ef639&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true,
  //   });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  fetchMoreData = async () => {
    this.setState({ page: (this.state.page+1) });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=4e938d94c3dd4ab1aba2625e046ef639&page=${
      this.state.page +1
    }&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      // loading: false,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: `${this.props.mode === "light" ? "white" : "black"}`,
          color: `${this.props.mode === "light" ? "black" : "white"}`,
          marginTop: "6rem",
        }}
      >
        {/* Inserting No. of pages box */}
        {/* {this.state.totalArticles && (
          <span
            style={{
              position: "fixed",
              top: "20vh",
              left: 0,
              boxShadow: `${
                this.props.mode === "dark"
                  ? "0 2px 18px 9px #B30041"
                  : "0 2px 18px 9px cyan"
              }`,
              backgroundColor: `${
                this.props.mode === "light" ? "white" : "black"
              }`,
              color: `${this.props.mode === "light" ? "black" : "white"}`,
              padding: "5px",
              minWidth: "5vh",
              zIndex: "1200",
            }}
          >
            {" "}
            Page {this.state.page} of{" "}
            {Math.ceil(this.state.totalArticles / this.props.pageSize)}
          </span>
        )} */}
        <div
          className="container justify-content-center"
          style={{ marginTop: "3rem" }}
        >
          {/* Heading */}
          <h2
            className="text-center"
            style={{
              textShadow: `${
                this.props.mode === "light"
                  ? "7px 5px 10px cyan,-7px -5px 10px cyan,-7px 5px 10px cyan,7px -5px 10px cyan"
                  : "7px 5px 10px #E75480,-7px -5px 10px #E75480,-7px 5px 10px #E75480,7px -5px 10px #E75480"
              }`,
            }}
          >
            JLJ - Top {this.props.title != null ? this.props.title : ""}{" "}
            Headlines
          </h2>
          {/* Prev and Next Button Group
          {this.state.articles.length !== 0 && (
            <div className="container m-5 d-flex justify-content-end">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  disabled={this.state.page <= 1}
                  type="button"
                  onClick={this.handlePrevClick}
                  className="btn btn-outline-success"
                >
                  &larr;Prev
                </button>
                <button
                  disabled={
                    Math.ceil(
                      this.state.totalArticles / this.props.pageSize
                    ) === this.state.page
                  }
                  type="button"
                  onClick={this.handleNextClick}
                  className="btn btn-outline-success"
                >
                  Next&rarr;
                </button>
              </div>
            </div>
          )} */}

          <div
            className="container"
            style={{ position: "absolute", top: `40vh`, zIndex: "100" }}
          >
            {this.state.loading && <Spinner />}
          </div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row mt-5">
                {this.state.articles.length !== 0 ? (
                  this.state.articles.map((element) => {
                    return (
                      <div className="col-md-4 p-4 mb-5" key={element.url}>
                        <NewsItem
                          title={element.title != null ? element.title : ""}
                          description={
                            element.description != null
                              ? element.description
                              : ""
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={
                            element.author != null ? element.author : "Unknown"
                          }
                          date={
                            element.publishedAt != null
                              ? element.publishedAt
                              : "-"
                          }
                          source={element.source.name}
                          mode={this.props.mode}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className=" text-center fw-bold fs-2">
                    Nothing to preview
                  </div>
                )}
              </div>
            </div>
          </InfiniteScroll>

          {/* {this.state.articles.length !== 0 && (
            <div className="container m-5 d-flex justify-content-end">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  disabled={this.state.page <= 1}
                  type="button"
                  onClick={this.handlePrevClick}
                  className="btn btn-outline-warning"
                >
                  &larr;Prev
                </button>
                <button
                  disabled={
                    Math.ceil(
                      this.state.totalArticles / this.props.pageSize
                    ) === this.state.page
                  }
                  type="button"
                  onClick={this.handleNextClick}
                  className="btn btn-outline-warning"
                >
                  Next&rarr;
                </button>
              </div>
            </div>
          )} */}
        </div>
        <div className="footer text-center">
          <p> &#128155; Created BY : Ishu Miglani &#128155; </p>
          <p>&copy; : 2023</p>
        </div>
      </div>
    );
  }
}
