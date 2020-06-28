import React from "react"
import { StaticQuery, graphql } from "gatsby"

function getProjectsList(data) {
  const values = []
  debugger
  data.allPruebaJson.edges.forEach(item => {
    values.push(item.node.Feb._1.question)
  })
  return values
}

const ComponentName = () => (
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
    render={data => <pre>{getProjectsList(data)}</pre>}
  ></StaticQuery>
)

export default ComponentName
