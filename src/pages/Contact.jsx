import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        package: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, email, package: selectedPackage, message } = formData;

        // Basic validation
        if (!name || !phone) {
            alert('Please fill in at least your Name and Phone Number.');
            return;
        }

        const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Interested Package:* ${selectedPackage}%0A*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/919633925006?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="w-full bg-bg-dark">
            {/* Header */}
            <section className="bg-bg-mint py-32 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-8 animate-slide-up tracking-tight">Contact Us</h1>
                    <p className="text-text-soft text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200 font-medium leading-relaxed">We are here to support you. Reach out for bookings, consultations, or any inquiries.</p>
                </div>
            </section>

            <section className="py-32 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 max-w-7xl mx-auto">

                        {/* Contact Information */}
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-10">Get in Touch</h2>
                                <p className="text-xl text-text-soft mb-12 leading-relaxed font-medium">Our team is available to answer your questions and help you plan your postnatal journey.</p>
                            </div>

                            <div className="space-y-10">
                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-xl">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-serif font-black text-white mb-2">Phone</h4>
                                        <a href="tel:+919633925006" className="text-xl text-text-soft font-bold hover:text-primary transition-colors">+91 96339 25006</a>
                                        <p className="text-text-soft/60 font-medium">Available 24/7 for emergencies</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-xl">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-serif font-black text-white mb-2">Email</h4>
                                        <a href="mailto:taskeenpostnatalcare@gmail.com" className="text-xl text-text-soft font-bold hover:text-primary transition-colors">taskeenpostnatalcare@gmail.com</a>
                                        <p className="text-text-soft/60 font-medium">We usually respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-xl">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-serif font-black text-white mb-2">Location</h4>
                                        <a
                                            href="https://g.co/kgs/pxFyghb"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl text-text-soft font-bold hover:text-primary transition-colors"
                                        >
                                            Clarisouth, Mammalippadi,<br />Kottakkal, Kerala
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10">
                                <a href="https://wa.me/919633925006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-1/2 bg-bg-mint p-12 md:p-16 rounded-[60px] border border-primary/10 shadow-2xl">
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-white font-bold text-lg ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-bg-dark border-2 border-primary/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all font-medium"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-white font-bold text-lg ml-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-bg-dark border-2 border-primary/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all font-medium"
                                            placeholder="Your Phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white font-bold text-lg ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-bg-dark border-2 border-primary/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all font-medium"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white font-bold text-lg ml-2">Package of Interest</label>
                                    <select
                                        name="package"
                                        value={formData.package}
                                        onChange={handleChange}
                                        className="w-full bg-bg-dark border-2 border-primary/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all font-medium appearance-none"
                                    >
                                        <option value="" disabled>Select a Package</option>
                                        <option>7 Days – 2 BHK Package</option>
                                        <option>14 Days – 2 BHK Package</option>
                                        <option>21 Days – 2 BHK Package</option>
                                        <option>30 Days – 2 BHK Package</option>
                                        <option>7 Days – 1 BHK Package</option>
                                        <option>14 Days – 1 BHK Package</option>
                                        <option>21 Days – 1 BHK Package</option>
                                        <option>30 Days – 1 BHK Package</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white font-bold text-lg ml-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-bg-dark border-2 border-primary/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all font-medium h-48 resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-6 rounded-full font-black text-xl transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="py-20 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto h-[500px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-primary/20 relative group">
                        <a
                            href="https://g.co/kgs/pxFyghb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full relative cursor-pointer"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.6789!2d75.9012!3d10.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b7c8f8f8f8f8%3A0x1234567890abcdef!2sTaskeen%20Ayurvedic%20Postnatal%20Care!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="pointer-events-none group-hover:opacity-90 transition-opacity"
                                title="Taskeen Ayurvedic Postnatal Care Location"
                            ></iframe>
                            <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-all pointer-events-none"></div>
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-8 py-4 rounded-full font-black text-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                                Click to Open in Google Maps
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
