import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const handleSubmit = (e) => {

    alert("Form submitted");
  };

  return (
    <div className="bg-black text-white p-8 w-3/4 mx-auto rounded-xl  my-5">
      <div className="icon-container flex justify-center">
        <FontAwesomeIcon icon={faEnvelope} className="mx-auto text-5xl" />
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto montserrat">
      <div class="form my-4">
        <input type="text" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">Your Name</span>
        </label>
      </div>
      <div class="form my-4">
        <input type="text" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">Your Email</span>
        </label>
      </div>
      <div class="form my-4">
        <input type="text" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">Your Enquiry</span>
        </label>
      </div>
      <button type="submit" className="text-black bg-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-6">
                    Submit
                </button>
      </form>
      
    </div>
  );
};

export default ContactForm;
