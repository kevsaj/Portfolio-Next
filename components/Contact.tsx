import { useState } from 'react';
import { 
    isValidEmail, 
    isDisposableEmail, 
    checkRateLimit, 
    setLastSubmissionTime, 
    containsSuspiciousContent, 
    isValidName 
} from '../utils/validation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [honeypot, setHoneypot] = useState('');

    // Validate individual fields
    const validateField = (name: string, value: string) => {
        let error = '';
        
        switch (name) {
            case 'name':
                if (!value.trim()) {
                    error = 'Full name is required';
                } else if (!isValidName(value.trim())) {
                    if (value.trim().length < 2) {
                        error = 'Name must be at least 2 characters';
                    } else if (value.trim().length > 50) {
                        error = 'Name must be less than 50 characters';
                    } else {
                        error = 'Name can only contain letters, spaces, hyphens, and apostrophes';
                    }
                } else if (containsSuspiciousContent(value)) {
                    error = 'Name contains invalid content';
                }
                break;
                
            case 'email':
                if (!value.trim()) {
                    error = 'Email address is required';
                } else if (!isValidEmail(value.trim())) {
                    error = 'Please enter a valid email address';
                } else if (isDisposableEmail(value.trim())) {
                    error = 'Please use a permanent email address';
                } else if (value.trim().length > 254) {
                    error = 'Email address is too long';
                }
                break;
                
            case 'message':
                if (!value.trim()) {
                    error = 'Message is required';
                } else if (value.trim().length < 10) {
                    error = 'Message must be at least 10 characters';
                } else if (value.trim().length > 2000) {
                    error = 'Message must be less than 2000 characters';
                } else if (containsSuspiciousContent(value)) {
                    error = 'Message contains invalid content';
                }
                break;
        }
        
        return error;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Update form data
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear validation error for this field if it exists
        if (validationErrors[name as keyof typeof validationErrors]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message)
        };
        
        setValidationErrors(errors);
        return !errors.name && !errors.email && !errors.message;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check honeypot (spam protection)
        if (honeypot) {
            console.log('Spam detected');
            return;
        }
        
        // Check rate limiting
        if (!checkRateLimit()) {
            setValidationErrors(prev => ({
                ...prev,
                message: 'Please wait at least 1 minute between form submissions'
            }));
            return;
        }
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitError('');
        console.log('Submitting form...');
        
        try {
            // Create FormData object
            const form = e.currentTarget;
            const formDataObj = new FormData(form);
            
            // Submit to Formspree
            const response = await fetch('https://formspree.io/f/mdoykbyg', {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Form submission succeeded!');
                setIsSuccess(true);
                setLastSubmissionTime();
                // Reset form
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                if (data.errors) {
                    setSubmitError(data.errors.map((error: any) => error.message).join(', '));
                } else {
                    setSubmitError('Failed to send message. Please try again.');
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
            console.log('Form submission finished');
        }
    };

    if (isSuccess) {
        return (
            <div id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-12 shadow-xl border border-green-200 dark:border-green-700">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully! 🎉</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Thank you for reaching out! I'll get back to you within 24 hours.
                        </p>
                        <button 
                            onClick={() => setIsSuccess(false)} 
                            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="contact" className="py-20 px-4 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Let's Work Together
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or want to discuss opportunities? 
                        I'd love to hear from you. Drop me a message and let's create something amazing together!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <a href="mailto:kevsaj@gmail.com" className="text-pink-600 dark:text-pink-400 hover:underline">kevsaj@gmail.com</a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-400">Toronto, Canada</p>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                                        <p className="text-gray-600 dark:text-gray-400">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://ca.linkedin.com/in/kevin-sajan" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                    </svg>
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://github.com/kevsaj" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Honeypot field for spam protection - hidden from users */}
                            <div style={{ display: 'none' }}>
                                <label htmlFor="website">Website (leave blank):</label>
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400 ${
                                        validationErrors.name 
                                            ? 'border-red-500 dark:border-red-400' 
                                            : 'border-gray-300 dark:border-gray-600'
                                    }`}
                                />
                                {validationErrors.name && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {validationErrors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400 ${
                                        validationErrors.email 
                                            ? 'border-red-500 dark:border-red-400' 
                                            : 'border-gray-300 dark:border-gray-600'
                                    }`}
                                />
                                {validationErrors.email && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {validationErrors.email}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message * 
                                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                        ({formData.message.length}/2000 characters)
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Hi Kevin, I'd love to discuss a project opportunity with you..."
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400 resize-none ${
                                        validationErrors.message 
                                            ? 'border-red-500 dark:border-red-400' 
                                            : 'border-gray-300 dark:border-gray-600'
                                    }`}
                                />
                                {validationErrors.message && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {validationErrors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                    isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()
                                        ? 'bg-gray-400 cursor-not-allowed transform-none'
                                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending Message...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <span>Send Message</span>
                                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Form Info */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <div className="flex">
                                    <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="ml-3">
                                        <p className="text-sm text-blue-800 dark:text-blue-200">
                                            🔒 Your information is secure and will only be used to respond to your inquiry. 
                                            I typically respond within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Error Display */}
                            {(submitError || Object.values(validationErrors).some(error => error)) && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <div className="flex">
                                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className="ml-3">
                                            <p className="text-sm text-red-800 dark:text-red-200">
                                                {submitError || 'Please fix the errors above and try again.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
