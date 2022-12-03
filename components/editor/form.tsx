'use client'

import { useState } from "react"
import { Editor } from "./editor"

export default function Form() {
  const [data, setData] = useState([])
  return (
    <>
      <Editor data={data} setData={setData} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}