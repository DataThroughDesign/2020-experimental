import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

const indexStyle = {
  width:'100%',
  height:'100%'
}

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={indexStyle}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
