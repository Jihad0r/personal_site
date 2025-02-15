import { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/New folder/sendMail.jpg"
import { TitleEffect } from "./effects/TextEffect";
export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    num: "",
    description: "",
  });

  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          subject: formData.subject,
          num: formData.num,
          message: formData.description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatus("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ firstName: "", lastName: "", subject: "",num:"",description: "" });
        },
        (error) => {
          setStatus("Failed to send email.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className=" mt-10  ">
         <p className='text-center m-auto mb-10'><TitleEffect text={"Contact"}  size={"text-5xl"}/></p>
        <div className="flex justify-between items-center w-full p-4 mx-auto bg-white shadow-md rounded-lg" id="Contact">
      <form onSubmit={handleSubmit} className="space-y-4 flex-shrink-0 w-full md:w-1/2 bg-[#8c9de9ab] p-4 rounded-xl">
      {status && <p className="text-center text-green-500">{status}</p>}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded-xl outline-0 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded-xl outline-0 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-2 border border-gray-300 rounded-xl outline-0 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
        />
        <input
          type="text"
          name="num"
          value={formData.num}
          onChange={handleChange}
          placeholder="Your Number"
          className="w-full p-2 border border-gray-300 rounded-xl outline-0 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-xl resize-none outline-0 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
          required
        />
        <button type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl  outline-0 hover:bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)]"
        >
          Send Email
        </button>
      </form>
      <div className="hidden md:block flex-shrink-0 bg-white w-1/2">
        <img className="w-4/5 m-auto" src={img} alt="sendMail" />
      </div>
    </div></div>
  );
};
