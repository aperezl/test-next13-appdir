'use client'

import { useState } from "react"
import { Editor } from "./editor"

interface Props {
  id?: string
  title: string
  content: any
}

export default function Form({ id, title, content }: Props) {
  const [data, setData] = useState(content || [])
  const [post, setPost] = useState({ title, id })

  const handleSubmit = async (e:any) => {
    e.preventDefault()    
    console.log(post, data)
    try {
      const body = {
        id: post.id,
        title: post.title,
        content: JSON.stringify(data)
      }
      const route = post.id ? `/api/post/${post.id}` : '/api/post'
      const method = post.id ? 'PUT' : 'POST'
      const result = await fetch(route, {
        method,
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