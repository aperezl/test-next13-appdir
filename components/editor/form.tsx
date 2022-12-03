'use client'

import { useState } from "react"
import { Editor } from "./editor"

interface Props {
  title: string
  content: any
}

export default function Form({ title, content }: Props) {
  const [data, setData] = useState(content || [])
  const [post, setPost] = useState({ title })

  const handleSubmit = async (e:any) => {
    e.preventDefault()    
    console.log(post, data)
    try {
      const body = {
        title: post.title,
        content: JSON.stringify(data)
      }
      const result = await fetch('/api/post', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      console.log(await result.json())
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value})} />
      <Editor data={data} setData={setData} />
      <button type="submit">Save</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  )
}