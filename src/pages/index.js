import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/appointment.css'
import '../css/contact.css'


import Layout from "../components/layout"

const TemplateWrapper = (props) => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Layout/>
    
  </div>
)

/*
class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>

        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />


        <Gallery imageHair1={this.props.data.imageHair1}/>




      </div>
    )
  }
}
*/

export default TemplateWrapper
/*
export const pageQuery = graphql`
  query {
    imageHair1: file(relativePath: {eq: "images/hair13.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
*/
