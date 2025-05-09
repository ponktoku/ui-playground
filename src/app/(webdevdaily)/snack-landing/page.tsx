import HomeButton from "@/components/home-button";
import Image from "next/image";

export default function SnackLanding() {
  return (
    <>
      <main className="flex min-h-dvh max-w-full flex-col items-center justify-center bg-pink-300">
        <h1 className="text-4xl font-bold">Snack Landing Page #306</h1>
        {/* mx-50 my-10 grid grid-cols-2 gap-20 rounded bg-white p-20 shadow-lg lg:mx-100 */}
        <section className="mx-4 my-8 grid w-full max-w-[90%] grid-cols-1 gap-10 overflow-hidden rounded bg-white p-6 shadow-lg sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] lg:grid-cols-2 lg:p-20 xl:max-w-[55%] 2xl:max-w-[45%]">
          <div className="mt-10">
            <h1 className="mb-5 text-5xl leading-15 font-medium tracking-wider">
              Ready? <br /> Snack time!
            </h1>
            <p className="mb-5 overflow-auto text-2xl tracking-wide text-gray-500">
              Delicious donuts baked to perfection. Sweet, fluffy, and ready to
              enjoy. Perfect for snack breaks or sharing with friends.
            </p>

            <button className="mb-10 rounded-full bg-black px-15 py-5 text-xl tracking-wide text-white hover:cursor-pointer hover:bg-black/80">
              Order Now
            </button>

            <div className="flex gap-5">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                className="rounded-full border border-black bg-[#C0D9DD]"
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
                className="rounded-full border border-black bg-[#FEC671]"
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
                  className="h-[300px] w-[300px] rounded-4xl object-cover shadow-md shadow-gray-400 hover:opacity-90"
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
                  className="h-[300px] w-[300px] rounded-4xl object-cover shadow-md shadow-gray-400 hover:opacity-90"
                />
              </a>
            </div>

            {/* right hand side */}
            <div className="mt-20 flex flex-col gap-10">
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
                  className="h-[300px] w-[300px] rounded-4xl object-cover shadow-md shadow-gray-400 hover:opacity-90"
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
                  className="h-[300px] w-[300px] rounded-4xl object-cover shadow-md shadow-gray-400 hover:opacity-90"
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
