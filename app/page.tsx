import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src={"/image.png"}
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
