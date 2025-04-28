import HomeButton from "@/components/home-button";
import Image from "next/image";

export default function SnackLanding() {
  return (
    <>
      <main className="bg-pink-300 flex flex-col items-center justify-center max-w-full min-h-dvh">
        <h1 className="font-bold text-4xl">Snack Landing Page #306</h1>

        <section className=" bg-white my-10 mx-50 rounded shadow-lg p-20 grid grid-cols-2 gap-20">
          <div className="mt-10">
            <h1 className="font-medium text-5xl leading-15 mb-5 tracking-wider">
              Ready? <br /> Snack time!
            </h1>
            <p className="overflow-auto text-gray-500 text-2xl tracking-wide mb-5">
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
                  <textPath
                    href="#circlePath"
                    startOffset="0%"
                    textLength="377"
                  >
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
                  <textPath
                    href="#circlePath"
                    startOffset="0%"
                    textLength="377"
                  >
                    low calorie low calorie low calorie
                  </textPath>
                </text>

                {/* Center icon */}
                <circle cx="75" cy="75" r="5" fill="black" />
              </svg>
              <Image
                src="/snack-landing-images/low-calorie-sticker.png"
                alt="Picture of low calorie sticker with star in centre"
                height={165}
                width={165}
              ></Image>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {/* left hand side */}
            <div className="flex flex-col gap-10">
              <a
                href="https://unsplash.com/photos/four-doughnut-on-plate-POM4KxWZcG8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/snack-landing-images/donuts-one.jpg"
                  alt="donut image 1"
                  height={300}
                  width={300}
                  className="rounded-4xl shadow-md shadow-gray-400 object-cover w-[300px] h-[300px] hover:opacity-90"
                />
              </a>

              <a
                href="https://unsplash.com/photos/brown-and-white-doughnuts-on-white-ceramic-plate-EACvtuV2k2E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/snack-landing-images/donuts-three.jpg"
                  alt="donut image 3"
                  height={300}
                  width={300}
                  className="rounded-4xl shadow-md shadow-gray-400 object-cover w-[300px] h-[300px] hover:opacity-90"
                />
              </a>
            </div>

            {/* right hand side */}
            <div className="flex flex-col gap-10 mt-20">
              <a
                href="https://unsplash.com/photos/a-bunch-of-doughnuts-that-are-on-a-plate-mfGSidToZys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/snack-landing-images/donuts-two.jpg"
                  alt="donut image 2"
                  height={300}
                  width={300}
                  className="rounded-4xl shadow-md shadow-gray-400 object-cover w-[300px] h-[300px] hover:opacity-90"
                />
              </a>

              <a
                href="https://unsplash.com/photos/white-and-brown-donuts-on-white-surface-A7PwjrNLf1U"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/snack-landing-images/donuts-four.jpg"
                  alt="donut image 4"
                  height={300}
                  width={300}
                  className="rounded-4xl shadow-md shadow-gray-400 object-cover w-[300px] h-[300px] hover:opacity-90"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <HomeButton />
    </>
  );
}
