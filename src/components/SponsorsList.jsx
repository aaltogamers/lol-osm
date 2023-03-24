import React from "react";
import { siteInfo } from "../siteData";
import SponsorLogo from "./SponsorLogo";
import { graphql, useStaticQuery } from "gatsby";

const SponsorList = () => {
  const logos = useStaticQuery(graphql`
    query {
      logos: allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                transformOptions: {
                  duotone: { highlight: "#212428", shadow: "#212428" }
                }
              )
            }
          }
        }
      }
    }
  `).logos.edges.map((edge) => edge.node.childImageSharp.gatsbyImageData);
  return (
    <div className="mt-10 flex justify-center items-center flex-wrap">
      {siteInfo.sponsors.map((sponsor) => (
        <SponsorLogo
          sponsor={sponsor}
          logos={logos}
          key={sponsor.label}
        ></SponsorLogo>
      ))}
    </div>
  );
};

export default SponsorList;
