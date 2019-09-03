import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.scss";
import Nav from '../components/Nav/Nav';



export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <Nav></Nav> */}
        {children}
      </div>
    );
  }
}
