import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
// import '../styles/main.scss';
import './Home.scss';


class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div class="home">
          <Helmet title={config.siteTitle} />
          <SEO />
          
          <header className="header">
          <h1 className="header__title">Data <span>✕</span> Design</h1>
          <p className="coming-soon">March 2020 · NYC</p>
          <h2 className="header__bg-text">2020</h2>
          </header>

         <main className="content">
            <h2 className="content__header">Data Through Design is an annual exhibition celebrating open data and critical making in New York City.</h2>

            <div className="content__cards">
                <div className="card card-1">
                  <h2 className="card__title">data</h2>
                  <p className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ducimus quam odit porro tempora nihil. Ullam, sunt inventore nulla illum dolores velit rerum voluptas maxime magni totam quas, recusandae harum.</p>
                </div>

                <div className="card card-2">
                  <h2 className="card__title">design</h2>
                  <p className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ducimus quam odit porro tempora nihil. Ullam, sunt inventore nulla illum dolores velit rerum voluptas maxime magni totam quas, recusandae harum.</p>
                </div>

                <div className="card card-3">
                  <h2 className="card__title">engagement</h2>
                  <p className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ducimus quam odit porro tempora nihil. Ullam, sunt inventore nulla illum dolores velit rerum voluptas maxime magni totam quas, recusandae harum.</p>
                </div>
            </div>

            <div className="sponsors">
              <h2 className="sponsors__title">Become a Sponsor</h2>
              <div className="sponsors__package-1">1</div>
              <div className="sponsors__package-2">2</div>
              <div className="sponsors__package-3">3</div>
              <div className="sponsors__package-4">4</div>
              <div className="sponsors__package-5">5</div>
            </div>
          </main>

          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
