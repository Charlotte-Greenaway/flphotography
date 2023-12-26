import reviews from "../reviewconstants/reviews";
import ReviewsSlider from '../components/swiper.js'
const Reviews = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-10">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-8 montserrat">Customer Reviews</h1>
        <ReviewsSlider reviews={reviews}/>
      </div>

      {/* Additional Content */}
      <section className="text-center p-8 bg-black text-white">
        <h2 className="text-5xl md:text-7xl 3xl:text-8xl  mb-4 parisienne">Let us capture the memories of your big day</h2>
        <a href="/contact">
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded montserrat">
          Contact Now
        </button>
        </a>
      </section>
    </div>
  );
};

export default Reviews;
