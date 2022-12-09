'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { use, useState } from "react"
import { Editor } from "./editor"

interface Props {
  id?: string
  title: string
  content: any
  image?: string | undefined
}

export default function Form({ id, title, content, image }: Props) {
  const [data, setData] = useState(content || [])
  const [post, setPost] = useState({ id, title, image })
  const [postImage, setPostImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState<null|string>(null);
  const router = useRouter()

  const uploadToClient = async (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      // setPostImage(i);
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
      await setPost({ ...post, image: uploadedFile.result.secure_url || 'none' })
      console.log({ postClient: post })
    }
  }
  
  const dispacher = async (path: string, method: string, payload: any) => {
    const result = await fetch(`/api/${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    return result.json()
  }

  const revalidate = async (path:string) => dispacher('/revalidate', 'PUT', { path })

  const handleSubmit = async (e:any) => {
    e.preventDefault()    
    console.log(post, data)
    try {
      const body = {
        id: post.id,
        title: post.title,
        content: JSON.stringify(data)
      }
      const route = post.id ? `post/${post.id}` : 'post'
      const method = post.id ? 'PUT' : 'POST'
      const result = await dispacher(route, method, body)
      console.log(result)
      console.log(await revalidate('/posts'))
      console.log(await revalidate(`/posts/${post.id}`))
    } catch (error) {
      console.log(error)
    }
  }

  const handleBack = async () => {
    router.refresh()
    router.replace('/dashboard/posts')
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
      <button type="submit">Save</button> -- 
      <button type="button" onClick={handleBack}>Back</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </form>
  )
}