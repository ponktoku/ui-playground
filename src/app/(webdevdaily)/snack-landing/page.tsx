import Image from "next/image";

export default function SnackLanding() {
  return (
    <main className="bg-pink-300 flex items-center justify-center max-w-full max-h-full">
      <section className=" bg-white my-10 mx-50 rounded shadow-xl p-20 grid grid-cols-2">
        <div className="">
          <h1 className="font-medium text-5xl leading-15 mb-5 tracking-wider">
            Ready? <br /> Snack time!
          </h1>
          <p className="overflow-auto text-gray-500 text-xl tracking-wide mb-5">
            Delicious donuts baked to perfection. Sweet, fluffy, and ready to
            enjoy. Perfect for snack breaks or sharing with friends.
          </p>

          <button className="bg-black rounded-full text-white py-5 px-15 text-xl tracking-wide hover:bg-black/80 hover:cursor-pointer mb-10">
            Order Now
          </button>

          <div className="flex gap-5">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              className="bg-[#C0D9DD] rounded-full border border-black"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 75, 75
         m -60, 0
         a 60,60 0 1,1 120,0
         a 60,60 0 1,1 -120,0"
                />
              </defs>

              {/* Top text */}
              <text fill="black" fontSize="10" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="0%" textLength="377">
                  low calorie low calorie low calorie
                </textPath>
              </text>

              {/* Center icon */}
              <text x="75" y="80" fontSize="24" textAnchor="middle">
                🖤
              </text>
            </svg>
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              className="bg-[#FEC671] rounded-full border border-black"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 75, 75
         m -60, 0
         a 60,60 0 1,1 120,0
         a 60,60 0 1,1 -120,0"
                />
              </defs>

              {/* Top text */}
              <text fill="black" fontSize="10" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="0%" textLength="377">
                  low calorie low calorie low calorie
                </textPath>
              </text>

              {/* Center icon */}
              <circle cx="75" cy="75" r="5" fill="black" />
            </svg>
            <Image
              src="/low-calorie-sticker.png"
              alt="Picture of low calorie sticker with star in centre"
              height={165}
              width={165}
            ></Image>
          </div>
        </div>

        <div className="">Image</div>
      </section>
    </main>
  );
}
