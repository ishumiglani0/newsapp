import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source,mode } =
      this.props;
    return (
      <div>
        <div
          className="card text-center"
          style={{ boxShadow: `${mode==='dark'?"0 0 20px 1px #E75480":"0 0 20px 1px yellow"}`,
                    backgroundColor:`${mode==='light'?'#EDEAE0':'rgb(23, 22, 22)'}` }}
        >
          <img
            src={
              imageUrl != null
                ? imageUrl
                : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="bg-lb card-body">
            <h5 className="bg-lb card-title text-warning border-bottom border-danger-subtle pb-2">
              {title}
            </h5>
            <p className={`bg-lb text-${mode==='light'?'dark':'light'} card-text`}>{description}</p>
            <p className={`bg-lb card-text text-${mode==='light'?'dark':'light'} mb-4`}>
              <small className="b-round-p1">
                <span className="fw-bold">Author : </span>
                {author}
              </small>
            </p>
            <p className={`bg-lb card-text mb-4 text-${mode==='light'?'dark':'light'}`}>
              <small className="b-round-p1">
                <span className="fw-bold">Last updated: </span>
                {new Date(date).toGMTString()}
              </small>
            </p>
            <p className={`bg-lb card-text mb-4 text-${mode==='light'?'dark':'light'}`}>
              <small className="b-round-p1">
                <span className="fw-bold">Source : </span>
                <span className="badge bg-success text-monospace">
                  {source}
                </span>
              </small>
            </p>
            <a
              rel="bg-lb noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-info text-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
