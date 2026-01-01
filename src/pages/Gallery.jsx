import React, { useState } from 'react';

const Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const promotionalVideos = [
        {
            id: 1,
            title: "Welcome to Taskeen",
            description: "Discover the warmth and care at Taskeen Ayurvedic Postnatal Care",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 12.57.20 PM.mp4",
            duration: "1:30",
            useVideoFrame: true
        },
        {
            id: 2,
            title: "Our Facility Tour",
            description: "Experience premium Ayurvedic mother and baby care",
            thumbnail: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=450&fit=crop&q=80&sat=-10",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 12.57.20 PM (1).mp4",
            duration: "2:30",
            useVideoFrame: false
        },
        {
            id: 3,
            title: "Experience Taskeen",
            description: "A glimpse into our daily care and routines",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 2.14.25 PM.mp4",
            duration: "1:45",
            useVideoFrame: true
        },
        {
            id: 4,
            title: "Our Dedicated Team",
            description: "Meet the professionals who care for you",
            videoUrl: "/videos/WhatsApp Video 2025-12-21 at 2.14.31 PM.mp4",
            duration: "2:00",
            useVideoFrame: true
        }
    ];

    const photoGallery = [
        {
            id: 1,
            src: "/images/gallery-photo-1.jpg",
            alt: "Happy Family at Taskeen",
            title: "Happy Family at Taskeen"
        },
        {
            id: 2,
            src: "/images/gallery-photo-2.png",
            alt: "Mother and Baby Care",
            title: "Mother and Baby Care"
        }
    ];

    return (
        <div className="w-full bg-bg-dark">
            {/* Header */}
            <section className="bg-bg-mint py-32 text-center relative overflow-hidden border-b border-primary/10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-8 animate-slide-up tracking-tight">Media Gallery</h1>
                    <p className="text-text-soft text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200 font-medium leading-relaxed">
                        Watch our videos and discover the Taskeen experience
                    </p>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-32 bg-bg-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {promotionalVideos.map((video) => (
                            <div
                                key={video.id}
                                className="group cursor-pointer animate-fade-in"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="aspect-video bg-bg-mint rounded-[40px] overflow-hidden relative shadow-2xl border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                                    {/* Thumbnail - either video frame or custom image */}
                                    {video.useVideoFrame ? (
                                        <video
                                            src={video.videoUrl}
                                            className="w-full h-full object-cover"
                                            preload="metadata"
                                            muted
                                        />
                                    ) : (
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-primary/60 transition-all duration-500"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-2xl">
                                            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
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
                                        <h3 className="text-2xl font-serif font-black mb-2">{video.title}</h3>
                                        <p className="text-sm opacity-90">{video.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-32 bg-bg-mint">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-16 text-center">Photo Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {photoGallery.map((photo) => (
                            <div key={photo.id} className="group cursor-pointer">
                                <div className="aspect-square bg-bg-dark rounded-[40px] overflow-hidden relative shadow-xl border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <h3 className="text-white font-serif font-bold text-xl">{photo.title}</h3>
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
                        <video
                            className="w-full h-full"
                            controls
                            autoPlay
                            src={selectedVideo.videoUrl}
                        >
                            Your browser does not support the video tag.
                        </video>

                        {/* Video Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-2xl font-serif font-black mb-1">{selectedVideo.title}</h3>
                            <p className="text-sm opacity-80">{selectedVideo.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
