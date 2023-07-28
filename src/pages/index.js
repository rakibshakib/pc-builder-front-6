import Image from "next/image";
import { Inter } from "next/font/google";
import { useStateContext } from "./store/Store";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const { state } = useStateContext();
  // console.log({ state });
  // console.log("")
  // rootAPI: // https://pc-builder-rs.onrender.com/get-all-product
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="text-xl text-emerald-400">
        This Is Simple Next Application
      </h2>
    </main>
  );
}
