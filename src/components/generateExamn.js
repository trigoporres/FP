import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Questions from "./questions"

function getProjectsList(data) {
  let value = []
  debugger
  data.allPruebaJson.edges.forEach(item => {
    value.push(<Questions item={item.node} />)
  })
  debugger
  return value
}

const GenerateExamen = () => (
  <StaticQuery
    query={graphql`
      {
        allPruebaJson {
          edges {
            node {
              Feb {
                _1 {
                  a
                  b
                  c
                  d
                  question
                  reply
                }
              }
            }
          }
        }
      }
    `}
    render={data => <div>{getProjectsList(data)}</div>}
  ></StaticQuery>
)

export default GenerateExamen
