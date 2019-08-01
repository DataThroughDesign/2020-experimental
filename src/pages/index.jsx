import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const indexStyle = {
  display:'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:'100%',
  backgroundColor:'pink'
}

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div style={indexStyle} className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <h1 style={{color:"black", zIndex:'100', fontSize:'6rem'}}>Data ✕ Design</h1>
          <h2 id="background-text" style={{position:'fixed', fontSize:'20rem', color:'white'}}>2020</h2>
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
