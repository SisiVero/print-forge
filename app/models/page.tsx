import modelImg from "@/public/png/homeImage.png";
import Image from "next/image";
import { modelData } from "../data";
import Link from "next/link";

export default function Models() {
  
  return (
    <section className="text-[#1E1E1E] grid md:grid-cols-3 md:gap-x-8 md:px-10 mb-10 grid-cols-1 w-full px-2 h-full gap-5">
      {modelData.map((models, id) => (
        <div
          className="md:w-[300px] md:h-fit rounded-[10px] border border-[#D1D1D1] transition-shadow duration-200 md:hover:shadow-[0_1px_4px_-1px_#1E1E1E]"
          key={id}
        >
          <Link href={`/models/${models.id}`} passHref>
            <div className="relative w-full md:w-[300px] md:h-[300px]">
              <Image
                src={modelImg}
                alt="Model"
                className="rounded-t-[10px] object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-start gap-3 ">
              <h1 className="text-2xl font-bold">{models.heading}</h1>
              <p className="text-[20px]">{models.description}</p>
              <p className=" rounded-[20px] w-fit p-2.5 border border-[#A1A1A1]">
                {models.tag}
              </p>
              <div className="flex items-center gap-1.5">
                <Image
                  src={models.likeIcon}
                  alt="like"
                  height={17}
                  width={21}
                />{" "}
                <p>{models.likeNumber}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
