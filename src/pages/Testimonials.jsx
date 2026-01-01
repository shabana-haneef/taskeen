import React, { useState } from 'react';

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const reviews = [
        {
            name: "Amina R.",
            role: "New Mother",
            text: "The care I received at Taskeen was exceptional. The staff treated me like family, and the Ayurvedic treatments really helped my recovery.",
            rating: 5,
            initials: "AR"
        },
        {
            name: "Fathima S.",
            role: "Mother of two",
            text: "A wonderful experience! The facilities are top-notch and the atmosphere is so peaceful. Highly recommended for postnatal care.",
            rating: 5,
            initials: "FS"
        },
        {
            name: "Thasneem",
            role: "Doctor",
            text: "My stay at Taskeen was rejuvenating. The diet, the massages, and the overall care were perfect for my postpartum journey.",
            rating: 5,
            initials: "TH"
        },
        {
            name: "Rubeena",
            role: "New Mother",
            text: "I was worried about my recovery after a C-section, but the specialized care at Taskeen made everything so much easier. Truly grateful.",
            rating: 5,
            initials: "RU"
        }
    ];

    // Video testimonials - Our Happy Clients
    const videoTestimonials = [
        {
            id: 1,
            name: "Fatima A.",
            role: "Happy Mother",
            thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=450&fit=crop&q=80&sat=-20&brightness=10",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 12.16.19 PM.mp4",
            youtubeId: null,
            duration: "1:45"
        },
        {
            id: 2,
            name: "Shahina Sherin",
            role: "Grateful Mother",
            thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=450&fit=crop&q=80",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 12.16.51 PM.mp4",
            youtubeId: null,
            duration: "2:00"
        },
        {
            id: 3,
            name: "Shakeeba",
            role: "Blessed Mother",
            thumbnail: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=450&fit=crop&q=80&sat=-10",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 12.17.57 PM.mp4",
            youtubeId: null,
            duration: "1:50"
        }
    ];

    return (
        <div className="w-full bg-bg-dark">
            {/* Header */}
            <section className="bg-bg-mint py-32 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-8 animate-slide-up tracking-tight">Happy Mothers</h1>
                    <p className="text-text-soft text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200 font-medium leading-relaxed">Hear from the mothers who have experienced the warmth and care of Taskeen.</p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-32 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {reviews.map((review, index) => (
                            <div key={index} className="p-12 bg-bg-mint rounded-[60px] border border-primary/10 hover:border-primary/30 transition-all duration-500 group shadow-2xl relative animate-fade-in">
                                <div className="text-primary text-7xl absolute top-8 right-12 opacity-20 font-serif group-hover:opacity-40 transition-opacity">“</div>
                                <div className="flex text-secondary mb-8 text-2xl">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-text-soft text-xl italic mb-10 leading-relaxed font-medium relative z-10">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-serif font-black text-white">{review.name}</h4>
                                        <span className="text-text-soft font-bold uppercase tracking-widest text-sm">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-32 bg-bg-mint">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 text-center">Our Happy Clients</h2>
                    <p className="text-text-soft text-xl text-center max-w-3xl mx-auto mb-16 font-medium">
                        Watch real mothers share their heartfelt experiences at Taskeen
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {videoTestimonials.map((video) => (
                            <div
                                key={video.id}
                                className="group cursor-pointer animate-fade-in"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="aspect-video bg-bg-dark rounded-[40px] overflow-hidden relative shadow-2xl border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                                    {/* Thumbnail */}
                                    <img
                                        src={video.thumbnail}
                                        alt={`${video.name} testimonial`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-primary/60 transition-all duration-500"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-2xl">
                                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        {video.duration}
                                    </div>

                                    {/* Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-serif font-black mb-1">{video.name}</h3>
                                        <p className="text-sm font-bold uppercase tracking-widest opacity-80">{video.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Player */}
                        {selectedVideo.youtubeId ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                                title={`${selectedVideo.name} testimonial`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video
                                className="w-full h-full"
                                controls
                                autoPlay
                                src={selectedVideo.videoUrl}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Video Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-2xl font-serif font-black mb-1">{selectedVideo.name}</h3>
                            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{selectedVideo.role}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
