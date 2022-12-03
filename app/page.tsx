import Form from '../components/editor/form'
export default function Home() {
  const content = '{"time":1670076520715,"blocks":[{"id":"Ct8MNVG8H6","type":"paragraph","data":{"text":"asdf jalkñsdjf ñlaksjdf ñalskjdf ñaslkdjf&nbsp;"}},{"id":"3tCL072nUf","type":"paragraph","data":{"text":"lañskjdfñlkasjdfñlaskjdfasdfs"}},{"id":"h43lhFQVRB","type":"paragraph","data":{"text":"asdfasd fjñasljdf ñlk"}},{"id":"paYOeEIbqW","type":"table","data":{"withHeadings":false,"content":[["sadfjñsalkdf","lñkjsadflñkj"],["asldkjfñl","lñaskjdf"],["asdfas","skadjflfdk<br>"]]}},{"id":"Ffk6DViD6O","type":"paragraph","data":{"text":"ñlasdkjf"}}],"version":"2.26.0"}'
  return (
    <>
      <Form 
        title='hola'
        content={JSON.parse(content)}
      />
    </>
  )
}
