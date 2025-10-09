import Default_Layout from "../layouts/Default_Layout";
import Body from "../components/Home/Body";
import Hero from "../components/Home/Hero";

export default function HomePage() {
  return (
    <>
      <Default_Layout>
        <Hero />
        <Body />
      </Default_Layout>
    </>
  );
}
