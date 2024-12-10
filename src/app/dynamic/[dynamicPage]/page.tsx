import { getCloudflareContext } from "@opennextjs/cloudflare";

export default async function Page({
    params,
  }: {
    params: Promise<{ dynamicPage: string }>
  }) {
    const page = (await params).dynamicPage;

    // const { results } = await (await getCloudflareContext()).env.DB.prepare(
    //   "SELECT id, name, description, price, rating, imageUrl FROM products WHERE id = ?;"
    // )
    //   .bind(1)
    //   .run();

    const results: any[] = []
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dynamic page {page}</h1>
            {results.map((result: any) => (
              <div key={result.id} className="product">
                <h2>{result.name}</h2>
                <p>{result.description}</p>
                <p>Price: ${result.price}</p>
                <p>Rating: {result.rating}</p>
                <img src={result.imageUrl} alt={result.name} />
              </div>
            ))}
        </main>
    );
  }