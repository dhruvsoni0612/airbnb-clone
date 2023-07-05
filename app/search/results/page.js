import { ResultsList } from "../components/ResultsList";

export default async function Page() {
    const res = await fetch('http://dhruvsoni0612.github.io/airbnb-clone/api/search');
    const data = await res.json();

    return (
        <>
            <ResultsList data={data} />
        </>
    );
}
