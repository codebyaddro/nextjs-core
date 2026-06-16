const ISRPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      next: { revalidate: 10 },
    },
  );
  const data = await res.json();
  return (
    <div>
      <h1>ISR Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ISRPage;
