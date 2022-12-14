'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { use, useState } from "react"
import { Editor } from "./editor"

interface Props {
  id?: string
  title: string
  slug: string
  content: any
  image?: string | undefined
}

export default function Form({ id, title, slug, content, image }: Props) {
  const [data, setData] = useState(content || [])
  const [post, setPost] = useState({ id, title, slug, image })
  const [createObjectURL, setCreateObjectURL] = useState<null|string>(image || null);
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
        slug: post.slug,
        content: JSON.stringify(data),
        image: post.image
      }
      const route = post.id ? `post/${post.id}` : 'post'
      const method = post.id ? 'PUT' : 'POST'
      const result = await dispacher(route, method, body)
      console.log(result)
      console.log(await revalidate('/posts'))
      console.log(await revalidate(`/posts/${post.slug}`))
      console.log(await revalidate('/'))
    } catch (error) {
      console.log(error)
    }
  }

  const handleBack = async () => {
    router.refresh()
    router.replace('/dashboard/posts')
  }


  const SaveBtn = () => {
    return (
      <button
        type="submit"
        className="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Save
      </button>
    )
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
      <SaveBtn /> -- 
      <button type="button" onClick={handleBack}>Back</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </form>
  )
}