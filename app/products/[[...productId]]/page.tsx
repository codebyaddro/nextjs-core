import React from "react";

const page = async ({ params }: { params: { productId: string[] } }) => {
  const { productId } = await params;
  console.log(productId);
  return (
    <div>
      <h1>Single Product</h1>
      <ul>
        {productId.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
