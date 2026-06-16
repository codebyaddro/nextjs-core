const SSRPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-cache",
    },
  );
  const data = await res.json();
  return (
    <div>
      <h1>SSR Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SSRPage;
