import { Post } from "../../../lib/post";
import About from "./About";
import Article from "./article";
import PostHeader from "./postHeader";

interface Props {
  post: Post
}

export default function Container({ post }: Props ) {
  return(
    <>
      <PostHeader title={post.title} />
      <Article content={post.content} />
      <About />
    </>
  )
}