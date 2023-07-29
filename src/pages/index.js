import Image from "next/image";
import { Inter } from "next/font/google";
import { useStateContext } from "../store/Store";
import RootLayout from "@/components/RootLayout";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
// import bannerImage from "../asset/bannerBig.jpg";
// import bannerSm from "../asset/bannerSm1.jpg";
// import bannerSm2 from "../asset/bannerSm2.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ allProducts }) {
  const { state } = useStateContext();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="w-full">
        <div className="grid lg:grid-rows-2 md:grid-rows-2 md:grid-flow-col lg:grid-flow-col gap-2 sm:grid-cols-1">
          <p className="md:row-span-2 md:col-span-2">
            <img
              className="object-cover h-full w-full"
              src="/images/bannerBig.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              className="object-cover h-full w-full"
              src="/images/bannerSm2.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              className="object-cover h-full w-full"
              src="/images/bannerSm1.jpg"
              alt=""
            />
          </p>
        </div>

        <h2 className="border-b-2 border-black text-md font-semibold pt-10">
          <span className="bg-black text-white px-2 inline-block">
            Recent Collections
          </span>
        </h2>
        <ProductList products={allProducts} />
        <CategoryList />
      </div>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-rs.onrender.com/get-all-product");
  const data = await res.json();
  // Shuffle the array to get a random order
  const shuffledData = shuffleArray(data);
  // Select the first 8 elements from the shuffled array
  const randomData = shuffledData.slice(0, 8);
  return {
    props: {
      allProducts: randomData,
    },
    revalidate: 30,
  };
};

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
