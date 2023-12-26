import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const ContactForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });
        navigate('/successpage'); // Navigate to the success page
      } catch (error) {
        // Handle the error
      }
    };

  return (
    <div className="bg-black text-white p-8 w-3/4 mx-auto rounded-xl  my-5">
      <div className="icon-container flex justify-center">
        <FontAwesomeIcon icon={faEnvelope} className="mx-auto text-5xl" />
      </div>
      <form name="contact" method="POST" action="/successpage" className="max-w-lg mx-auto montserrat" onSubmit={handleSubmit}>
      <div class="form my-4">
        <input type="hidden" name="form-name" value="contact"/>
        <input type="text" name="name" autocomplete="off" id="name" required />
        <label for="name" class="label-name">
          <span class="content-name">Your Name</span>
        </label>
      </div>
      <div class="form my-4">
        <input type="text" name="email" autocomplete="off" required id="email" />
        <label for="email" class="label-name">
          <span class="content-name">Your Email</span>
        </label>
      </div>
      <div class="form my-4">
        <input type="text" name="message" autocomplete="off" required id="message"/>
        <label for="message" class="label-name">
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
