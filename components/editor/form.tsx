'use client'

import { useState } from "react"
import { Editor } from "./editor"

interface Props {
  id?: string
  title: string
  content: any
  image: string | undefined
}

export default function Form({ id, title, content, image }: Props) {
  const [data, setData] = useState(content || [])
  const [post, setPost] = useState({ id, title, image })
  const [postImage, setPostImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState<null|string>(null);

  const uploadToClient = async (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setPostImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      const data = new FormData()
      data.append('file', i)
      data.append('id', id || 'undefined')
      const result = await fetch('/api/images', {
        method: 'POST',
        body: data
      })
      const uploadedFile = await result.json()
      console.log(uploadedFile)
      console.log(uploadedFile.result.secure_url)
      setPost({ ...post, image: uploadedFile.result.secure_url || '' })
    }
  }
  

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
      <img src={createObjectURL || ''} alt='preview image' />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={uploadToClient}
      />
      <Editor data={data} setData={setData} id={post.id}/>
      <button type="submit">Save</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  )
}