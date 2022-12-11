import FeaturePost from "../../ui/FeaturedPost";
import Hero from "../../ui/Hero";

export default function Home() {
  return (
    <>
      <Hero
        slogan='Demasiado viejo para hacer otra cosa'
        name='Antonio Perez'
        body='This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.'
      />
      {/* @ts-expect-error Server Component */}
      <FeaturePost />
      Hello World
    </>
  )
}
