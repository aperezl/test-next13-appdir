'use client'
import { useRef, useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'

interface Props {
  data: any
  setData: any
}

export function Editor({ data, setData }: Props) {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const ref = useRef<EditorJS>()

  async function initializeEditor() {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default
    const Embed = (await import("@editorjs/embed")).default
    const Table = (await import("@editorjs/table")).default
    const List = (await import("@editorjs/list")).default
    const Code = (await import("@editorjs/code")).default
    const LinkTool = (await import("@editorjs/link")).default
    const InlineCode = (await import("@editorjs/inline-code")).default
    const ImageTool = (await import("@editorjs/image")).default

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady: () => {
          ref.current = editor
        },
        placeholder: 'Type here...',
        data,
        onChange: async () => {
          setData(await ref.current?.save())
        },
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const data = new FormData()
                  data.append('file', file)
                  data.append('id', '1234')
                  const x = await fetch('/api/images', {
                    method: 'POST',
                    body: data
                  })
                  console.log({ file, x })
                  console.log(await x.json())
                }
              }
            }
          }
        }
      })
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted])

  async function onSubmit(e: Event) {
    e.preventDefault()
    // setIsSaving(true)
    if (ref.current) {
      const blocks = await ref.current.blocks
      console.log(blocks)
    }
    // setIsSaving(false)
  }
  if (!isMounted) {
    return null
  }

  return <div id="editor" className="min-h-[500px]" />
}
