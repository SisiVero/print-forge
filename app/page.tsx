import heroImage from "../public/png/heroImage.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]  text-[#1E1E1E] flex md:flex-row flex-col md:items-center md:gap-24.5 box-border px-10">
      <div className="md:w-[45vw] w-[80vw]">
        <p className="md:uppercase pb-5 hidden md:flex">Your go-to platform for 3D printing files</p>
        <p className="font-bold md:text-5xl pb-5 text-[40px]">Discover what’s possible with 3D printing</p>
        <p className="text-2xl">Join our community of creators and explore a vast library of user-submitted models.</p>
        <button className="text-[20px] border-2 p-3 md:mt-16 cursor-pointer mt-10 font-semibold md:mb-0 mb-6">Browse models</button>
      </div>
        <Image src={heroImage}  alt="" className="object-cover" width={560} height={560}/>
    </main>
  );
}
