import { ResultsList } from "../components/ResultsList";

export default async function Page() {
    const res = await fetch(https://airbnb-clone.vercel.app/api/search');
    const data = await res.json();

    return (
        <>
            <ResultsList data={data} />
        </>
    );
}
