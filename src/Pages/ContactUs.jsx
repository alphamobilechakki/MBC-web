import React, { useState } from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Bg from "../assets/Banner/S1.png";
import { ContactSchema } from "../Components/validations/ValidationSchemas"; // ✅ import schema
import { BannerSection } from "../Components/user/BannerSection"; 

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({})
    const handleChange = async (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        try {

            await ContactSchema.validateAt(name, { ...form, [name]: value });
            setError((prev) => ({ ...prev, [name]: "" }));
        } catch (error) {
            setError((prev) => ({ ...prev, [name]: error.message }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await ContactSchema.validate(form, { abortEarly: false });
            console.log("Contact Form Submitted:", form);
            setSubmitted(true);
            setForm({ name: "", email: "", phone: "", message: "" });
            setError({});
        } catch (validationError) {
            const newErrors = {};
            validationError.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setError(newErrors);
            setSubmitted(false);
        }
    };


    return (


        <>
            <BannerSection
                title="Contact Us"
                subtitle="Doorstep grinding & organic food delivery for a healthier tomorrow"
                bgImage={Bg}
                className="bg-left-bottom"
            />
            <div className="  bg-[#fffaf3] flex flex-col items-center py-10 px-4"  >
                {/* Heading */}
                <h2 className="text-3xl font-bold text-[#7a5410] mb-6">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-[#e6d9b5]"
                    >
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-[#b08943]" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"

                                    className="w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] border-[#e6d9b5] focus:outline-none focus:ring-2 focus:ring-[#d4a94d]"
                                />
                                {error.name && (
                                    <p className="text-red-500 text-sm mt-1">{error.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-[#b08943]" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email (optional)"

                                    className="w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] border-[#e6d9b5] focus:outline-none focus:ring-2 focus:ring-[#d4a94d]"
                                />
                                {error.email && (
                                    <p className="text-red-500 text-sm mt-1">{error.email}</p>
                                )}

                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 text-[#b08943]" size={18} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    className="w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] border-[#e6d9b5] focus:outline-none focus:ring-2 focus:ring-[#d4a94d]"
                                />
                                {error.phone && (
                                    <p className="text-red-500 text-sm mt-1">{error.phone}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"

                                    className="w-full p-3 border rounded-lg bg-[#fffaf3] border-[#e6d9b5] focus:outline-none focus:ring-2 focus:ring-[#d4a94d]"
                                />
                                {error.message && (
                                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#d4a94d] cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-[#b08943] transition"
                            >
                                Send Message
                            </button>

                            {submitted && (
                                <p className="text-green-600 text-center mt-2">
                                    ✅ Thank you! We will get back to you soon.
                                </p>
                            )}
                        </div>
                    </form>

                    {/* Contact Info */}
                    <div className="bg-[#fffaf3]/90 shadow-lg rounded-2xl p-6 border border-[#e6d9b5]">
                        <h3 className="text-xl font-semibold text-[#7a5410] mb-4">
                            Get in Touch
                        </h3>
                        <p className="flex items-start gap-2 mb-3">
                            <MapPin className="text-[#b08943] mt-1" size={18} />
                            G-23 A, Road No.5 Opposite Kankaria Gas Godown, Kartarpura Jaipur,
                            Rajasthan, 302006
                        </p>
                        <p className="flex items-center gap-2 mb-3">
                            <Phone className="text-[#b08943]" size={18} />
                            +91 95298 99999
                        </p>
                        <p className="flex items-center gap-2 mb-3">
                            <Mail className="text-[#b08943]" size={18} />
                            aatachakki807@gmail.com
                        </p>

                        {/* Google Map Embed */}
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8493178143245!2d75.7873!3d26.8886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d8c3a3d3a7%3A0x7b95b9fcbcb6d9b5!2sKartarpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-48 mt-4 rounded-lg border"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactUs;
