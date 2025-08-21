import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import FallingPetalsBackground from '../components/FallingPetalsBackground';

export default function WeddingInvitation() {
    const [showRSVP, setShowRSVP] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        attending: '',
        events: [] as string[],
        guests: '1',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
    const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
    const [submissionCount, setSubmissionCount] = useState<number>(0);

    useEffect(() => {
        setAnimateIn(true);
        
        // Check localStorage for rate limiting data
        const lastSubmit = localStorage.getItem('lastRSVPSubmit');
        const submitCount = localStorage.getItem('rsvpSubmitCount');
        if (lastSubmit) {
            setLastSubmissionTime(parseInt(lastSubmit));
        }
        if (submitCount) {
            setSubmissionCount(parseInt(submitCount));
        }
    }, []);

    const validateForm = () => {
        const errors: {[key: string]: string} = {};
        
        // Name validation with sanitization
        const namePattern = /^[a-zA-Z\s\-'.,]+$/;
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        } else if (!namePattern.test(formData.name.trim())) {
            errors.name = 'Name contains invalid characters';
        } else if (formData.name.trim().length > 100) {
            errors.name = 'Name is too long';
        }
        
        // Phone validation with stricter pattern
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else {
            const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)\.]{9,19}$/;
            const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
            if (!phoneRegex.test(formData.phone) || cleanPhone.length < 10 || cleanPhone.length > 15) {
                errors.phone = 'Please enter a valid phone number';
            }
        }
        
        // Attendance validation
        if (!formData.attending || !['yes', 'no'].includes(formData.attending)) {
            errors.attending = 'Please select your attendance status';
        }
        
        // Events validation (only if attending)
        if (formData.attending === 'yes') {
            if (!formData.events || formData.events.length === 0) {
                errors.events = 'Please select which event(s) you will attend';
            } else if (!formData.events.every(event => ['betrothal', 'wedding'].includes(event))) {
                errors.events = 'Invalid event selection';
            }
        }
        
        // Guests validation
        if (!['1', '2', '3', '4', '5'].includes(formData.guests)) {
            errors.guests = 'Please select a valid number of guests';
        }
        
        // Message validation with content filtering
        if (formData.message) {
            if (formData.message.length > 500) {
                errors.message = 'Message must be less than 500 characters';
            }
            // Check for potential spam/malicious content
            const suspiciousPatterns = [
                /<script/i, /javascript:/i, /on\w+=/i, /<iframe/i, 
                /http[s]?:\/\//i, /www\./i, /\.com/i, /\.org/i, /\.net/i
            ];
            if (suspiciousPatterns.some(pattern => pattern.test(formData.message))) {
                errors.message = 'Message contains prohibited content';
            }
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sanitizeInput = (input: string): string => {
        return input
            .replace(/[<>\"'&]/g, '') // Remove potential HTML/script characters
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Handle checkbox arrays for events
        if (name === 'events') {
            const checkbox = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                events: checkbox.checked 
                    ? [...prev.events, value]
                    : prev.events.filter(event => event !== value)
            }));
        } else {
            // Sanitize input in real-time for text fields
            let sanitizedValue = value;
            if (name === 'name' || name === 'message') {
                sanitizedValue = sanitizeInput(value);
            }
            
            // Clear events when attendance changes to "no"
            if (name === 'attending' && value === 'no') {
                setFormData(prev => ({
                    ...prev,
                    [name]: sanitizedValue,
                    events: []
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: sanitizedValue
                }));
            }
        }
        
        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitMessage('');
        
        // Rate limiting checks
        const now = Date.now();
        const timeSinceLastSubmit = now - lastSubmissionTime;
        const RATE_LIMIT_WINDOW = 60000; // 1 minute
        const MAX_SUBMISSIONS_PER_HOUR = 3;
        
        // Check if user is submitting too frequently
        if (timeSinceLastSubmit < RATE_LIMIT_WINDOW) {
            setSubmitMessage('Please wait a moment before submitting again.');
            return;
        }
        
        // Check hourly submission limit
        const oneHourAgo = now - (60 * 60 * 1000);
        if (lastSubmissionTime > oneHourAgo && submissionCount >= MAX_SUBMISSIONS_PER_HOUR) {
            setSubmitMessage('Too many submissions. Please try again later.');
            return;
        }
        
        // Validate form before submission
        if (!validateForm()) {
            setSubmitMessage('Please correct the errors above and try again.');
            return;
        }
        
        setIsSubmitting(true);

        try {
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkan1Zoy38rpZyT2vxMtcnV5no5JLx-5ZGzaBv_2lHBXeiGkOIGzFYjr3vttCnQvX-/exec';
            
            // Add security token and timestamp
            const securityToken = btoa(now.toString()).slice(0, 16); // Simple token based on timestamp
            
            const params = new URLSearchParams({
                name: sanitizeInput(formData.name.trim()),
                phone: sanitizeInput(formData.phone.trim()),
                attending: formData.attending,
                events: formData.events.join(', '),
                guests: formData.guests,
                message: sanitizeInput(formData.message.trim()),
                timestamp: new Date().toISOString(),
                token: securityToken,
                userAgent: navigator.userAgent.slice(0, 100) // Basic fingerprinting
            });
            
            const urlWithParams = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;
            
            // Add timeout to prevent hanging requests
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
            
            await fetch(urlWithParams, {
                method: 'GET',
                mode: 'no-cors',
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);

            // Update rate limiting data
            setLastSubmissionTime(now);
            const newSubmissionCount = timeSinceLastSubmit > (60 * 60 * 1000) ? 1 : submissionCount + 1;
            setSubmissionCount(newSubmissionCount);
            
            // Store in localStorage for persistence
            localStorage.setItem('lastRSVPSubmit', now.toString());
            localStorage.setItem('rsvpSubmitCount', newSubmissionCount.toString());

            setSubmitMessage('Thank you! Your RSVP has been submitted successfully. We look forward to celebrating with you!');
            setFormData({
                name: '',
                phone: '',
                attending: '',
                events: [],
                guests: '1',
                message: ''
            });
            setFormErrors({});
            
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                setSubmitMessage('Request timed out. Please check your connection and try again.');
            } else {
                setSubmitMessage('We apologize, but there was an error submitting your RSVP. Please try again or contact us directly.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <h1 className="animated-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 py-1 leading-tight" style={{ 
                                fontFamily: 'Great Vibes, cursive',
                                textShadow: '2px 2px 4px rgba(212, 175, 55, 0.4)',
                                lineHeight: '1.2'
                            }}>
                                Kevin Sajan
                            </h1>
                            <p className="text-xl sm:text-2xl italic mb-3 py-1" style={{ 
                                fontFamily: 'Playfair Display, serif',
                                color: '#8b6914'
                            }}>with</p>
                            <h1 className="animated-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-1 leading-tight" style={{ 
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
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Full Name(s) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif transition-colors ${
                                            formErrors.name ? 'border-red-300 bg-red-50' : 'border-yellow-300'
                                        }`}
                                        placeholder="Enter your full name(s)"
                                        maxLength={100}
                                    />
                                    {formErrors.name && (
                                        <p className="text-red-500 text-sm mt-1 font-serif">{formErrors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif transition-colors ${
                                            formErrors.phone ? 'border-red-300 bg-red-50' : 'border-yellow-300'
                                        }`}
                                        placeholder="Enter your phone number"
                                        maxLength={20}
                                    />
                                    {formErrors.phone && (
                                        <p className="text-red-500 text-sm mt-1 font-serif">{formErrors.phone}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-3">
                                        Will you be attending? <span className="text-red-500">*</span>
                                    </label>
                                    <div className={`space-y-3 p-3 rounded-lg border ${
                                        formErrors.attending ? 'border-red-300 bg-red-50' : 'border-yellow-200 bg-yellow-50'
                                    }`}>
                                        <label className="flex items-center font-serif cursor-pointer hover:bg-yellow-100 p-2 rounded">
                                            <input 
                                                type="radio" 
                                                name="attending" 
                                                value="yes" 
                                                checked={formData.attending === 'yes'}
                                                onChange={handleInputChange}
                                                className="mr-3 text-yellow-500 focus:ring-yellow-400" 
                                            />
                                            <span className="text-gray-700">✨ Joyfully accepts with pleasure</span>
                                        </label>
                                        <label className="flex items-center font-serif cursor-pointer hover:bg-yellow-100 p-2 rounded">
                                            <input 
                                                type="radio" 
                                                name="attending" 
                                                value="no" 
                                                checked={formData.attending === 'no'}
                                                onChange={handleInputChange}
                                                className="mr-3 text-yellow-500 focus:ring-yellow-400" 
                                            />
                                            <span className="text-gray-700">💌 Regretfully declines with love</span>
                                        </label>
                                    </div>
                                    {formErrors.attending && (
                                        <p className="text-red-500 text-sm mt-1 font-serif">{formErrors.attending}</p>
                                    )}
                                </div>

                                {/* Event Selection - Only show if attending */}
                                {formData.attending === 'yes' && (
                                    <div>
                                        <label className="block text-gray-700 text-sm font-serif font-medium mb-3">
                                            Which event(s) will you attend? <span className="text-red-500">*</span>
                                        </label>
                                        <div className={`space-y-3 p-4 rounded-lg border ${
                                            formErrors.events ? 'border-red-300 bg-red-50' : 'border-yellow-200 bg-yellow-50'
                                        }`}>
                                            <label className="flex items-start font-serif cursor-pointer hover:bg-yellow-100 p-3 rounded transition-colors">
                                                <input 
                                                    type="checkbox" 
                                                    name="events" 
                                                    value="betrothal" 
                                                    checked={formData.events.includes('betrothal')}
                                                    onChange={handleInputChange}
                                                    className="mr-3 mt-1 text-yellow-500 focus:ring-yellow-400" 
                                                />
                                                <div>
                                                    <span className="text-gray-700 font-medium">💍 Betrothal Ceremony</span>
                                                    <p className="text-sm text-gray-600 mt-1">December 29th, 2025 at 5:00 PM<br/>St. Mary's Church, Podimattom</p>
                                                </div>
                                            </label>
                                            <label className="flex items-start font-serif cursor-pointer hover:bg-yellow-100 p-3 rounded transition-colors">
                                                <input 
                                                    type="checkbox" 
                                                    name="events" 
                                                    value="wedding" 
                                                    checked={formData.events.includes('wedding')}
                                                    onChange={handleInputChange}
                                                    className="mr-3 mt-1 text-yellow-500 focus:ring-yellow-400" 
                                                />
                                                <div>
                                                    <span className="text-gray-700 font-medium">👰🤵 Wedding Ceremony</span>
                                                    <p className="text-sm text-gray-600 mt-1">January 1st, 2026 at 11:00 AM<br/>Mary Matha Church, Ollur</p>
                                                </div>
                                            </label>
                                        </div>
                                        {formErrors.events && (
                                            <p className="text-red-500 text-sm mt-1 font-serif">{formErrors.events}</p>
                                        )}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Number of guests (including yourself)
                                    </label>
                                    <select 
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif bg-white"
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5">5+ Guests</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-serif font-medium mb-2">
                                        Special requests or message for the couple
                                        <span className="text-gray-500 font-normal"> (optional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        maxLength={500}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-serif resize-none ${
                                            formErrors.message ? 'border-red-300 bg-red-50' : 'border-yellow-300'
                                        }`}
                                        placeholder="Share any dietary restrictions, accessibility needs, or a special message for Kevin & Steffy..."
                                    />
                                    <div className="flex justify-between items-center mt-1">
                                        {formErrors.message && (
                                            <p className="text-red-500 text-sm font-serif">{formErrors.message}</p>
                                        )}
                                        <p className="text-gray-400 text-sm font-serif ml-auto">
                                            {formData.message.length}/500 characters
                                        </p>
                                    </div>
                                </div>

                                {submitMessage && (
                                    <div className={`p-4 rounded-lg text-center font-serif border ${
                                        submitMessage.includes('error') || submitMessage.includes('apologize') || submitMessage.includes('correct')
                                            ? 'bg-red-50 text-red-700 border-red-200' 
                                            : 'bg-green-50 text-green-700 border-green-200'
                                    }`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-serif font-semibold py-4 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] focus:ring-4 focus:ring-yellow-300 shadow-lg"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting Your RSVP...
                                            </span>
                                        ) : (
                                            '💌 Submit RSVP'
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-sm text-gray-500 font-serif italic">
                                    <span className="text-red-500">*</span> Required fields
                                </p>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
