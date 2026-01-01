import React from 'react';

const About = () => {
    return (
        <div className="w-full bg-bg-dark">
            {/* Header / Banner */}
            <section className="bg-bg-mint py-32 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-8 animate-slide-up tracking-tight">About Taskeen</h1>
                    <p className="text-text-soft text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200 font-medium leading-relaxed">Dedicating our care to the wellness of new mothers and their babies through traditional Ayurveda.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 bg-bg-dark">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-24 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="rounded-[60px] overflow-hidden shadow-2xl animate-float border-4 border-primary/10">
                            <img
                                src="/images/ayurvedic-treatment.png"
                                alt="Ayurvedic Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-10 leading-tight">Our Mission</h2>
                        <p className="text-xl text-text-soft mb-10 leading-relaxed font-medium">
                            At Taskeen, we believe that <span className="text-primary font-black italic">"Every Mother Deserves Better Treatment"</span>. The postnatal period is a crucial time for recovery and bonding. Our mission is to provide a serene, hygienic, and supportive environment where mothers can rejuvenate physically and mentally using time-tested Ayurvedic practices.
                        </p>
                        <h3 className="text-2xl font-serif font-black text-white mb-6">Founder's Message</h3>
                        <blockquote className="border-l-8 border-primary pl-8 italic text-text-soft mb-10 text-xl font-medium leading-relaxed">
                            "We established Taskeen to bridge the gap between traditional home care and professional medical support. We want every mother to feel cherished and cared for during this beautiful transition."
                        </blockquote>
                        <p className="font-black text-white text-2xl font-serif">- Mohammed Haneefa</p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 bg-bg-mint">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-white">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-12 bg-bg-dark rounded-[50px] border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80"
                                    alt="Authentic Ayurveda"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black mb-6 text-white">Authentic Ayurveda</h3>
                                <p className="text-text-soft text-lg leading-relaxed font-medium">Using generic medicines and traditional therapies for holistic healing.</p>
                            </div>
                        </div>
                        <div className="p-12 bg-bg-dark rounded-[50px] border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&h=400&fit=crop&q=80"
                                    alt="Safety & Hygiene"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black mb-6 text-white">Safety & Hygiene</h3>
                                <p className="text-text-soft text-lg leading-relaxed font-medium">Strict adherence to hygiene protocols to ensure a safe environment for newborns.</p>
                            </div>
                        </div>
                        <div className="p-12 bg-bg-dark rounded-[50px] border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&h=400&fit=crop&q=80"
                                    alt="Compassionate Care"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black mb-6 text-white">Compassionate Care</h3>
                                <p className="text-text-soft text-lg leading-relaxed font-medium">Treating every guest with the warmth and respect of a family member.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
