import React from 'react';

const Rooms = () => {
    const commonInclusions = [
        { image: "/images/inclusions/dhoomapaanam.jpg", text: "Dhoomapaanam" },
        { image: "/images/inclusions/kizhi.jpg", text: "Kizhi Therapy" },
        { image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop&q=80", text: "Full Body Ayurvedic Massage" },
        { image: "/images/inclusions/steam-bath.jpg", text: "Steam Bath" }
    ];

    const packages = [
        {
            title: "7 Days – 2 BHK Package",
            duration: "7 Days",
            accommodation: "2 BHK Flat",
            price: "₹16,100",
            features: [
                "Steam Bathing",
                "Protein-rich Ayurvedic Food",
                "Full Body Ayurvedic Massage",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "14 Days – 2 BHK Package",
            duration: "14 Days",
            accommodation: "2 BHK Flat",
            price: "₹32,200",
            features: [
                "Full Body Ayurvedic Massage",
                "Steam Bath",
                "Protein-rich Ayurvedic Food",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "21 Days – 2 BHK Package",
            duration: "21 Days",
            accommodation: "2 BHK Flat",
            price: "₹48,300",
            features: [
                "Daily Full Body Ayurvedic Massage",
                "Steam Bath",
                "Protein-rich Food",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "30 Days – 2 BHK Package",
            duration: "30 Days",
            accommodation: "2 BHK Flat",
            price: "₹69,000",
            features: [
                "Complete Postnatal Ayurvedic Care",
                "Daily Full Body Massage",
                "Steam Bath",
                "Protein-rich Diet",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "7 Days – 1 BHK Package",
            duration: "7 Days",
            accommodation: "1 BHK Flat",
            price: "₹13,699",
            features: [
                "Full Body Ayurvedic Massage",
                "Steam Bath",
                "Protein-rich Food",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "14 Days – 1 BHK Package",
            duration: "14 Days",
            accommodation: "1 BHK Flat",
            price: "₹27,538",
            features: [
                "Full Body Ayurvedic Massage",
                "Steam Bath",
                "Nutritious Ayurvedic Food",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "21 Days – 1 BHK Package",
            duration: "21 Days",
            accommodation: "1 BHK Flat",
            price: "₹41,300",
            features: [
                "Full Body Ayurvedic Massage",
                "Steam Bath",
                "Nutritious Food",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        },
        {
            title: "30 Days – 1 BHK Package",
            duration: "30 Days",
            accommodation: "1 BHK Flat",
            price: "₹59,000",
            features: [
                "Complete Postnatal Ayurvedic Care",
                "Daily Full Body Massage",
                "Steam Bath",
                "Nutritious Ayurvedic Diet",
                "Facial Massage",
                "Laundry Services",
                "Dhoomapaanam",
                "Kizhi Therapy"
            ]
        }
    ];

    return (
        <div className="w-full bg-bg-dark">
            {/* Header */}
            <section className="bg-bg-mint py-32 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-8 animate-slide-up tracking-tight">Our Packages</h1>
                    <p className="text-text-soft text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200 font-medium leading-relaxed">
                        Comprehensive postnatal care packages designed for your comfort and recovery.
                    </p>
                </div>
            </section>

            {/* Common Inclusions */}
            <section className="py-20 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="bg-bg-mint rounded-[40px] p-12 border border-primary/10 shadow-xl max-w-5xl mx-auto">
                        <h2 className="text-3xl font-serif font-black text-white mb-10 text-center">All Packages Include</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {commonInclusions.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-lg">
                                        <img src={item.image} alt={item.text} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <span className="text-text-soft font-bold text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className="relative p-8 bg-bg-mint rounded-[40px] border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-xl hover:-translate-y-2 flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-serif font-black text-white mb-2 leading-tight">{pkg.title}</h3>
                                    <div className="text-text-soft font-bold text-sm uppercase tracking-widest mb-4">{pkg.duration} • {pkg.accommodation}</div>
                                    <div className="text-primary text-4xl font-black">{pkg.price}</div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-soft font-medium text-sm">
                                                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="tel:+919633925006"
                                    className="w-full py-4 rounded-full font-black transition-all text-lg shadow-lg text-center block bg-primary text-white hover:bg-secondary mt-auto"
                                >
                                    Call Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accommodations Section */}
            <section className="py-32 bg-bg-mint">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8">Our Accommodations</h2>
                        <p className="text-text-soft text-xl max-w-2xl mx-auto font-medium">Experience luxury and tranquility in our specially designed recovery suites.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="group">
                            <div className="aspect-video rounded-[50px] overflow-hidden mb-10 shadow-2xl border-4 border-primary/10">
                                <img
                                    src="/images/standard-room.png"
                                    alt="Standard Room"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-3xl font-serif font-black text-white mb-4">Standard Room</h3>
                            <p className="text-text-soft text-lg leading-relaxed font-medium">A cozy and hygienic space equipped with all essential amenities for a comfortable stay.</p>
                        </div>
                        <div className="group">
                            <div className="aspect-video rounded-[50px] overflow-hidden mb-10 shadow-2xl border-4 border-primary/10">
                                <img
                                    src="/images/deluxe-suite.png"
                                    alt="Deluxe Suite"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-3xl font-serif font-black text-white mb-4">Deluxe Suite</h3>
                            <p className="text-text-soft text-lg leading-relaxed font-medium">Spacious suite with premium furnishings, additional seating area, and enhanced privacy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rooms;
