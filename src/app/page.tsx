import Image from "next/image";
import Link from "next/link";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export default async function Home() {

  // const { results: products } = await (await getCloudflareContext()).env.DB.prepare(
  //   "SELECT id, name, description, price, imageUrl FROM Products"
  // ).run();
  const products: any[] = []


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dynamic/1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Go To Dynamic page
        </button>
      </Link>
      <div className="mt-8">
        {products.map((product: any) => (
          <div key={product.id} className="mb-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
