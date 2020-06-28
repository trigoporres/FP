import React from "react"
import { Link } from "gatsby"

const examns = [
  {
    key: "Feb-2020-A",
    name: "Febrero 2020 Tipo A",
  },
]

const ExamnsList = () =>
  examns.map(examn => (
    <li key={examn.key}>
      <Link to="/exam" examn={examn.key}>
        {examn.name}
      </Link>
    </li>
  ))

export default ExamnsList
