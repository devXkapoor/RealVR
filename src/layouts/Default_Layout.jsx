import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function Default_Layout({ children }) {
  return (
    <>
      <div className="flex flex-col bg-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
