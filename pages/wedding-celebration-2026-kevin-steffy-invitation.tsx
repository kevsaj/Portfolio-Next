import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import FallingPetalsBackground from '../components/FallingPetalsBackground';

export default function WeddingInvitation() {
    const [showRSVP, setShowRSVP] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        setAnimateIn(true);
    }, []);

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate, noydir, noodp" />
                <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate" />
                <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate" />
                <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
                <meta name="duckduckbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
                <meta name="baiduspider" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
                <meta name="yandexbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
                <meta name="facebookexternalhit" content="noindex, nofollow" />
                <meta name="twitterbot" content="noindex, nofollow" />
                <meta name="linkedinbot" content="noindex, nofollow" />
                <meta name="pinterest" content="nopin" />
                <title>Wedding Invitation</title>
                <meta name="description" content="Private wedding invitation - access by invitation only" />
                <link rel="canonical" href="#" />
            </Head>

            <div className="min-h-screen relative overflow-hidden" style={{
                background: 'linear-gradient(to bottom, #fffafc, #f9f6ff)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'lighten'
            }}>
                {/* Falling Petals Background Component */}
                <FallingPetalsBackground />
                {/* Watercolor Texture Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(247, 198, 217, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(200, 162, 200, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(230, 184, 175, 0.25) 0%, transparent 50%)'
                }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10">
                    {/* Header Section with Floral Border */}
                    <div className="text-center mb-8 opacity-100">

                        {/* Couple's Photo Frame */}
                        <div className="relative mb-6">
                            {/* Outer Golden Ring */}
                            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full shadow-2xl" style={{
                                background: 'linear-gradient(45deg, #d4af37, #f9e79f, #ffd700, #ffef94, #d4af37, #f9e79f)',
                                backgroundSize: '300% 300%',
                                padding: '4px',
                                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)',
                                animation: 'shimmer 6s ease-in-out infinite'
                            }}>
                                {/* Inner Golden Ring */}
                                <div className="w-full h-full rounded-full" style={{
                                    background: 'linear-gradient(135deg, #f9e79f, #d4af37, #f9e79f)',
                                    padding: '2px'
                                }}>
                                    {/* Photo Container */}
                                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white shadow-inner">
                                        <Image 
                                            src="/assets/invitation.jpg" 
                                            alt="Kevin & Steffy" 
                                            fill
                                            className="object-cover rounded-full"
                                            quality={100}
                                            priority
                                            sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bible Verse */}
                        <div className="mb-8 opacity-100">
                            <p className="text-lg italic max-w-2xl mx-auto leading-relaxed" style={{ 
                                fontFamily: 'Playfair Display, serif',
                                color: '#8b6914'
                            }}>
                                "And above all these put on love which binds everything together in perfect harmony. And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful."
                            </p>
                            <p className="text-base mt-2" style={{ 
                                fontFamily: 'Playfair Display, serif',
                                color: '#a67c00'
                            }}>
                                — Colossians 3:14-15
                            </p>
                            
                            {/* Ornamental Divider */}
                            <div className="flex justify-center mt-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-600"></div>
                                    <div className="text-yellow-600">✦</div>
                                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Invitation Card */}
                    <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl mb-8 relative opacity-100" style={{
                        background: 'linear-gradient(45deg, #d4af37, #f9e79f, #ffd700, #ffef94, #d4af37, #f9e79f)',
                        backgroundSize: '300% 300%',
                        padding: '4px',
                        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.4), 0 0 30px rgba(255, 215, 0, 0.3)',
                        animation: 'shimmer 6s ease-in-out infinite'
                    }}>
                        <div className="rounded-3xl p-8 md:p-12 relative" style={{
                            background: 'linear-gradient(135deg, #faf7f0, #f5f0e8, #f0ebe3, #ebe6d9)'
                        }}>
                        
                        <style jsx>{`
                            @keyframes shimmer {
                                0% {
                                    background-position: 0% 50%;
                                }
                                50% {
                                    background-position: 100% 50%;
                                }
                                100% {
                                    background-position: 0% 50%;
                                }
                            }
                            
                            .animated-text {
                                background: linear-gradient(45deg, #d4af37, #b8860b, #cd853f, #daa520, #d4af37, #b8860b);
                                background-size: 300% 300%;
                                -webkit-background-clip: text;
                                background-clip: text;
                                -webkit-text-fill-color: transparent;
                                color: transparent;
                                animation: shimmer 6s ease-in-out infinite;
                            }
                        `}</style>
                        {/* Ornamental Corner Flourishes */}
                        <div className="absolute top-3 left-3 text-2xl" style={{ color: '#d4af37' }}>✦</div>
                        <div className="absolute top-3 right-3 text-2xl" style={{ color: '#d4af37' }}>✦</div>
                        <div className="absolute bottom-3 left-3 text-2xl" style={{ color: '#d4af37' }}>✦</div>
                        <div className="absolute bottom-3 right-3 text-2xl" style={{ color: '#d4af37' }}>✦</div>

                        {/* Parents' Invitation */}
                        <div className="text-center mb-8">
                            <div className="text-base italic" style={{ 
                                fontFamily: 'Merriweather, serif',
                                color: '#8b6914'
                            }}>
                                <p className="mb-1">Mrs. Bency Shajan & Mr. Shajan Mookken</p>
                                <p className="mb-1">cordially invite your esteemed presence with family on</p>
                                <p className="font-semibold" style={{ color: '#a67c00' }}>the blessed occasion of the marriage of our son</p>
                            </div>
                        </div>

                        {/* Couple's Names */}
                        <div className="text-center mb-8 py-2">
                            <h1 className="animated-text text-6xl md:text-7xl font-bold mb-3 py-1 leading-tight" style={{ 
                                fontFamily: 'Great Vibes, cursive',
                                textShadow: '2px 2px 4px rgba(212, 175, 55, 0.4)',
                                lineHeight: '1.2'
                            }}>
                                Kevin Sajan
                            </h1>
                            <p className="text-2xl italic mb-3 py-1" style={{ 
                                fontFamily: 'Playfair Display, serif',
                                color: '#8b6914'
                            }}>with</p>
                            <h1 className="animated-text text-6xl md:text-7xl font-bold py-1 leading-tight" style={{ 
                                fontFamily: 'Great Vibes, cursive',
                                textShadow: '2px 2px 4px rgba(212, 175, 55, 0.4)',
                                lineHeight: '1.2'
                            }}>
                                Steffy Treesa Binoy
                            </h1>
                            <div className="mt-4 text-base italic" style={{ 
                                fontFamily: 'Merriweather, serif',
                                color: '#8b6914'
                            }}>
                                <p className="mb-1">Daughter of Mrs. Suma Binoy & Mr. Binoy Jose</p>
                                <p className="mb-1">Granddaughter of Mrs. Annamma Joseph and Late K. T. Joseph</p>
                                <p className="mb-1">Kochukarippaparambil House, Koovappally, Kanjirappally</p>
                                <p className="mt-2 font-semibold" style={{ color: '#a67c00' }}>which will by the grace of God, be blessed</p>
                            </div>
                        </div>

                        {/* Event Details */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Betrothal */}
                            <div className="text-center rounded-2xl p-6 border-2" style={{
                                background: 'linear-gradient(to bottom right, rgba(247, 198, 217, 0.1), rgba(200, 162, 200, 0.1))',
                                borderColor: '#d4af37'
                            }}>
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-2 uppercase" style={{ 
                                        fontFamily: 'Cinzel Decorative, serif',
                                        color: '#8b6914'
                                    }}>BETROTHAL</h3>
                                    {/* Ornamental Divider */}
                                    <div className="flex justify-center items-center space-x-2">
                                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-600"></div>
                                        <div className="text-yellow-600">✦</div>
                                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-600"></div>
                                    </div>
                                </div>
                                <div style={{ color: '#654321' }}>
                                    <p className="text-xl mb-2" style={{ fontFamily: 'Lora, serif' }}>December 29th, 2025</p>
                                    <p className="text-lg italic mb-3" style={{ fontFamily: 'Lora, serif' }}>5:00 PM</p>
                                    <div className="text-base" style={{ fontFamily: 'Lora, serif' }}>
                                        <p className="font-semibold">St. Mary's Church</p>
                                        <p>Podimattom, Kanjirappally</p>
                                    </div>
                                </div>
                            </div>

                            {/* Wedding */}
                            <div className="text-center rounded-2xl p-6 border-2" style={{
                                background: 'linear-gradient(to bottom right, rgba(200, 162, 200, 0.1), rgba(230, 184, 175, 0.1))',
                                borderColor: '#d4af37'
                            }}>
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-2 uppercase" style={{ 
                                        fontFamily: 'Cinzel Decorative, serif',
                                        color: '#8b6914'
                                    }}>WEDDING</h3>
                                    {/* Ornamental Divider */}
                                    <div className="flex justify-center items-center space-x-2">
                                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-600"></div>
                                        <div className="text-yellow-600">✦</div>
                                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-600"></div>
                                    </div>
                                </div>
                                <div style={{ color: '#654321' }}>
                                    <p className="text-xl mb-2" style={{ fontFamily: 'Lora, serif' }}>January 1st, 2026</p>
                                    <p className="text-lg italic mb-3" style={{ fontFamily: 'Lora, serif' }}>11:00 AM</p>
                                    <div className="text-base" style={{ fontFamily: 'Lora, serif' }}>
                                        <p className="font-semibold">Mary Matha Church</p>
                                        <p>Ollur, Thrissur</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center pt-6 relative">
                            {/* Golden Corner Flourishes */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                                <div className="flex items-center space-x-4">
                                    <div className="text-2xl" style={{ color: '#d4af37' }}>✦</div>
                                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                                    <div className="text-2xl" style={{ color: '#d4af37' }}>✦</div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <p className="text-base italic" style={{ 
                                    fontFamily: 'Merriweather, serif',
                                    color: '#8b6914'
                                }}>
                                    Sharing the happiness: Maria, Stella, Blesson & Arun
                                </p>
                                
                                {/* Floral decoration - Removed for better browser compatibility */}
                                <div className="flex justify-center mt-4">
                                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

                                </div>
                            </div>
                        </div>

                        {/* RSVP Button */}
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowRSVP(!showRSVP)}
                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-serif font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                            >
                                RSVP
                            </button>
                        </div>
                        </div>
                    </div>

                    {/* RSVP Form */}
                    {showRSVP && (
                        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-yellow-200">
                            <h3 className="text-2xl font-serif mb-6 text-center text-yellow-700">
                                Please Respond
                            </h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Name(s)
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif"
                                        placeholder="Your name(s)"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Will you be attending?
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center font-serif">
                                            <input type="radio" name="attending" value="yes" className="mr-2 text-yellow-500" />
                                            <span>Joyfully accepts</span>
                                        </label>
                                        <label className="flex items-center font-serif">
                                            <input type="radio" name="attending" value="no" className="mr-2 text-yellow-500" />
                                            <span>Regretfully declines</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Number of guests
                                    </label>
                                    <select className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Special requests or message
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif"
                                        placeholder="Any special requests or a message for the couple..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-serif font-semibold py-3 rounded-lg transition-all duration-300"
                                >
                                    Submit RSVP
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
