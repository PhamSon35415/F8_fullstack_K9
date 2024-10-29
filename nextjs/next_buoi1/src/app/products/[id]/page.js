export default async function ({ params, searchParams }) {
    console.log(await params, await searchParams);
    // const x = await params;

    return (
        <>
            <h1>Products detail </h1>
        </>
    );
}
