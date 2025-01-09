import React, { useState } from "react";
import { db } from "../../firebase.config.js";
import { collection, addDoc } from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    // resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleFileChange = (e) => {
  //     setFormData({ ...formData, resume: e.target.files[0] });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //   let resumeURL = null;
      //   if (formData.resume) {
      //     const storageRef = ref(storage, `resumes/${formData.resume.name}`);
      //     const snapshot = await uploadBytes(storageRef, formData.resume);
      //     resumeURL = await getDownloadURL(snapshot.ref);
      //   }
      await addDoc(collection(db, "contacts"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        // resume: resumeURL,
        timestamp: new Date(),
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        // resume: null,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setLoading(false);
    setTimeout(() => {
        setSuccess(null);
      }, 4000);
    console.log("Form Data Submitted: ", formData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              onKeyDown={(e) => {
                {
                  /* Prevent non-numeric characters */
                }
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              rows="4"
            />
          </div>

          {/* Resume Upload */}
          {/* <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white bg-blue-600 rounded-lg ${
              loading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-700"
            } focus:ring focus:ring-blue-300 focus:outline-none`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success !== null && (
            <div
              className={`mt-4 px-4 py-2 border rounded-lg ${
                success
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-red-500 bg-red-50 text-red-700"
              }`}
            >
              {success
                ? "Your data has been submitted successfully!"
                : "There was an error submitting your data."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
