import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Products from "../components/feed/Products";
import Header from "../components/Header/Header";
// import Notification from "../components/notification/Notification";


export default function Home({ products }) {

  return (
    <div>
      <Head>
        <title> Amazon Clone</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="container">
        {/* Banner */}
        <Banner />

        {/* feed */}
        <Products products={products} />
      </main>


    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
  };
};
