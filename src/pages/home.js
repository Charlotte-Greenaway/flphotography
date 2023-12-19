import banner from "../assets/bridegroomriver.jpg";
import widget1 from "../assets/bandgkiss.jpg";
import widget2 from '../assets/confetti.jpg';
import widget3 from '../assets/bridesmaids.jpg'

export default function Home() {
  return (
    <>
      <div>
        <img
          src={banner}
          alt="bride and groom by river"
          className="w-full h-48 md:h-96 lg:h-90 xl:h-90 2xl:h-100 3xl:h-135 object-cover object-top "
        />
        <p className="text-black text-4xl md:text-5xl parisienne px-4 mx-auto fit-content whitespace-nowrap max-w-full my-6">
          Simply elegant, Truly yours ...
        </p>
      </div>
      <div className="flex flex-col md:flex-row mx-auto w-full md:w-3/4 justify-center">
      <div class="relative group w-3/4 md:w-1/3 h-64 xl:h-79 2xl:h-80 3xl:h-90 mx-auto md:mx-5 m-5 ">
        <img
          src={widget1}
          alt="Descriptive Alt Text"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 w-full bg-white text-black p-4 transition-all duration-300 ease-in-out transform">
          <h3 class="font-bold montserrat">Unforgettable Moments</h3>
          <p class="max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out group-hover:max-h-60">
            Capturing the magic of your special day.
          </p>
        </div>
      </div>
      <div class="relative group w-3/4 md:w-1/3 h-64 xl:h-79 2xl:h-80 3xl:h-90 mx-auto md:mx-5 m-5">
        <img
          src={widget2}
          alt="Descriptive Alt Text"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 w-full bg-white text-black p-4 transition-all duration-300 ease-in-out transform">
          <h3 class="font-bold montserrat">Love in Every Shot</h3>
          <p class="max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out group-hover:max-h-60">
          Each photo, a chapter of your love story.
          </p>
        </div>
      </div>
      <div class="relative group w-3/4 md:w-1/3 h-64 xl:h-79 2xl:h-80 3xl:h-90 mx-auto md:mx-5 m-5">
        <img
          src={widget3}
          alt="Descriptive Alt Text"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 w-full bg-white text-black p-4 transition-all duration-300 ease-in-out transform">
          <h3 class="font-bold montserrat">Your Day, Your Story</h3>
          <p class="max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out group-hover:max-h-60">
          Personalized photography that speaks to the heart.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
