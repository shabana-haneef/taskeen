import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col w-full bg-bg-dark overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                {/* Cinematic Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Mother and Baby"
                        className="w-full h-full object-cover opacity-50 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-bg-dark/80 via-transparent to-bg-dark"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
                    <span className="inline-block py-2 px-6 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-black mb-8 animate-fade-in uppercase tracking-[0.3em]">
                        Welcome to Taskeen
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 leading-tight animate-slide-up tracking-tighter">
                        Every Mother Deserves <br className="hidden md:block" />
                        <span className="text-primary italic">Better Treatment</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-soft mb-12 max-w-3xl animate-slide-up animation-delay-200 font-medium leading-relaxed">
                        Premium Ayurvedic Mother & Baby Postnatal Care. Experience traditional healing with modern comfort in a serene environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 animate-slide-up animation-delay-400">
                        <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-black transition-all shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 text-lg">
                            Book Your Stay
                        </Link>
                        <Link to="/about" className="bg-white/5 backdrop-blur-md border-2 border-primary/30 text-white hover:bg-primary px-10 py-5 rounded-full font-black transition-all shadow-xl hover:shadow-primary/20 text-lg">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-bg-dark relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-12 rounded-[40px] bg-bg-mint border border-primary/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
                                    alt="Traditional Healing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black text-white mb-4">Traditional Healing</h3>
                                <p className="text-text-soft text-lg leading-relaxed">Authentic Ayurvedic treatments tailored for postnatal recovery and rejuvenation.</p>
                            </div>
                        </div>
                        <div className="p-12 rounded-[40px] bg-bg-mint border border-primary/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop&q=80"
                                    alt="Modern Comfort"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black text-white mb-4">Modern Comfort</h3>
                                <p className="text-text-soft text-lg leading-relaxed">Premium facilities and professional care in a peaceful, hygienic setting.</p>
                            </div>
                        </div>
                        <div className="p-12 rounded-[40px] bg-bg-mint border border-primary/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop&q=80"
                                    alt="Expert Baby Care"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black text-white mb-4">Expert Baby Care</h3>
                                <p className="text-text-soft text-lg leading-relaxed">Specialized attention for your newborn, ensuring a healthy start for your little one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Snippet */}
            <section className="py-32 bg-bg-mint overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-4/5 md:aspect-square rounded-[60px] overflow-hidden shadow-2xl animate-float border-4 border-primary/20">
                            <img
                                src="/images/baby-wrapped.jpg"
                                alt="Newborn Baby Care"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-black uppercase tracking-widest text-sm mb-6 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight">Comprehensive Care for <span className="text-primary">Mother & Baby</span></h2>
                        <p className="text-text-soft text-xl mb-10 leading-relaxed font-medium">
                            Our specialized postnatal programs are designed to support the physical and emotional well-being of both mother and child during the critical first weeks.
                        </p>
                        <ul className="space-y-6 mb-12">
                            {['Traditional Ayurvedic Massages', 'Nutritional Diet Planning', 'Newborn Care & Support', 'Lactation Consultation'].map((item) => (
                                <li key={item} className="flex items-center gap-4 text-white font-bold text-lg">
                                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/packages" className="inline-block bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-black transition-all shadow-xl hover:shadow-primary/30 text-lg">
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Snippet */}
            <section className="py-32 bg-bg-dark">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-20">What Mothers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-bg-mint p-12 rounded-[50px] border border-primary/10 relative">
                            <div className="text-primary text-6xl absolute -top-6 left-12 font-serif">"</div>
                            <p className="text-text-soft text-xl italic mb-8 leading-relaxed font-medium">
                                "Taskeen provided the perfect environment for my recovery. The staff was incredibly supportive and the Ayurvedic treatments were life-changing."
                            </p>
                            <div className="font-black text-white text-xl">— Shahina Sherin</div>
                        </div>
                        <div className="bg-bg-mint p-12 rounded-[50px] border border-primary/10 relative">
                            <div className="text-primary text-6xl absolute -top-6 left-12 font-serif">"</div>
                            <p className="text-text-soft text-xl italic mb-8 leading-relaxed font-medium">
                                "The best decision I made for my postnatal care. The hygiene standards and the personalized attention to my baby were exceptional."
                            </p>
                            <div className="font-black text-white text-xl">— Shakeeba</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-bg-dark/10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-10 tracking-tight">Ready to Start Your Recovery?</h2>
                    <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
                        Join hundreds of mothers who have experienced the Taskeen difference. Book your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-white text-primary hover:bg-bg-dark hover:text-white px-12 py-6 rounded-full font-black transition-all shadow-2xl text-xl">
                            Book Now
                        </Link>
                        <a href="https://wa.me/919633925006" target="_blank" rel="noopener noreferrer" className="bg-bg-dark text-white hover:bg-white hover:text-primary px-12 py-6 rounded-full font-black transition-all shadow-2xl text-xl flex items-center justify-center gap-3">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
