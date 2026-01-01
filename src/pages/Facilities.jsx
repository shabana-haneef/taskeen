import React from 'react';

const Facilities = () => {
    const facilitiesList = [
        { title: "Hygienic Rooms", description: "Spacious, well-ventilated, and spotless rooms ensuring a germ-free environment for mother and baby.", image: "/images/standard-room.png" },
        { title: "Ayurvedic Massages", description: "Traditional postnatal massages (Abhyanga) using medicated oils to strengthen muscles and improve skin tone.", image: "/images/postnatal-care.png" },
        { title: "Steam Bathing", description: "Traditional Ayurvedic steam bath (Oushadha Puka) to detoxify the body and improve circulation after massages.", image: "/images/ayurvedic-treatment.png" },
        { title: "Baby Care Nursery", description: "Specialized care unit for newborns, attended by experienced staff for bathing and massage.", image: "/images/mother-baby-1.jpg" },
        { title: "Wi-Fi & Entertainment", description: "High-speed internet and entertainment options to keep you connected and relaxed.", image: "/images/deluxe-suite.png" },
        { title: "Laundry Service", description: "Daily laundry services to ensure fresh and clean clothing for you and your little one.", image: "/images/standard-room.png" }
    ];

    return (
        <div className="w-full bg-bg-dark">
            <section className="bg-bg-mint py-24 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6 animate-slide-up tracking-tight">Our Facilities</h1>
                    <p className="text-text-soft text-xl max-w-2xl mx-auto animate-slide-up animation-delay-200 font-medium">Designed for comfort, hygiene, and holistic healing in a serene environment.</p>
                </div>
            </section>

            <section className="py-24 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {facilitiesList.map((item, index) => (
                            <div key={index} className="group relative rounded-[40px] overflow-hidden h-96 shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in border border-primary/10 bg-bg-mint">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content Overlay at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-bg-dark/90 backdrop-blur-md border-t border-primary/20 transform transition-transform duration-500">
                                    <h3 className="text-2xl font-serif font-black text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-text-soft text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;
