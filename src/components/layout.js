import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import Services from './services'
import Intro from './intro'
import Hours from './hours'
import Pricing from './pricing'
import Appointment from './appointment'
import Gallery from './gallery'
import Contact from './contact'


const Layout = ({children}) => (
  <div >

    <StaticQuery
      query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "images/banner.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />

          </Helmet>

          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              width: '100%',
              height: '60%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'absolute',

            }}
          />
          <Header image={data.site.siteMetadata.title}/>

        </>
      )}
    />
    <div className="main-container mb-5">
      <React.Fragment>
        <Intro/>
        <Appointment/>
        <Services/>
        <Pricing/>
        <Gallery/>
        <Hours/>
        <Contact/>
      </React.Fragment>
    </div>

  </div>

)

export default Layout
