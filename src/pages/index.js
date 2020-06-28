import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Preguntas from "../components/preguntas"
import ExamnsList from "../components/exams"

const IndexPage = () => (
  <Layout>
    <SEO title="Funfamentos de programación" />
    <h1>Hola!!</h1>
    <p>
      Este es un prjecto sobre la asignatura de fundamentos de programación de
      UNED
    </p>
    <h2>Examenes</h2>
    <ExamnsList />
    {/* <Preguntas /> */}
  </Layout>
)

export default IndexPage
