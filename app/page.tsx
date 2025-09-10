import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-full fixed top-0 flex justify-center items-center bg-[#0a2342]">
      <div className="px-[28px]">
        <h1 className="text-[32px] text-center text-white lg:text-[64px]">
          Get<span className="font-bold">BBL</span>
        </h1>
        <p className="text-[14px] text-center italic text-white font-light lg:text-[16px]">
          "We are currently building a gateway that connects patients with
          trusted hospitals for cosmetic surgery"
        </p>
        <div className="absolute px-[28px] bottom-0 left-0 text-[12px] flex justify-center  w-full text-white">
          <p>
            Got any question? Reach out to us at{" "}
            <a href="hello@getbbl.com">hello@getbbl.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
