import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Questions from "./questions"

function getProjectsList(data) {
  let value = []
  data.allFebrero2019AJson.edges.forEach(item => {
    debugger
    value.push(<Questions item={item.node} />)
  })
  return value
}

const GenerateExamen = () => (
  <StaticQuery
    query={graphql`
      {
        allFebrero2019AJson {
          edges {
            node {
              Feb {
                _1 {
                  a
                  c
                  b
                  code
                  d
                  question
                  reply
                }
                _10 {
                  a
                  b
                  c
                  code
                  d
                  question
                  reply
                }
                _2 {
                  a
                  b
                  c
                  code
                  d
                  question
                  reply
                }
                _3 {
                  a
                  b
                  c
                  code
                  d
                  question
                  reply
                }
                _4 {
                  a
                  b
                  c
                  code
                  d
                  question
                  reply
                }
                _5 {
                  b
                  a
                  code
                  c
                  d
                  question
                  reply
                }
                _6 {
                  a
                  b
                  code
                  c
                  d
                  question
                  reply
                }
                _7 {
                  a
                  b
                  c
                  code
                  d
                  question
                  reply
                }
                _8 {
                  a
                  b
                  code
                  c
                  question
                  d
                  reply
                }
                _9 {
                  a
                  b
                  c
                  code
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
