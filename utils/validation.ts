// Email validation utilities
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// Check for common disposable email domains
const disposableEmailDomains = [
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com',
    'tempmail.org',
    'throwaway.email',
    'temp-mail.org',
    'mohmal.com',
    'fakeinbox.com',
    'trashmail.com',
    'getnada.com'
];

export const isDisposableEmail = (email: string): boolean => {
    const domain = email.split('@')[1]?.toLowerCase();
    return disposableEmailDomains.includes(domain);
};

// Rate limiting helper (basic client-side check)
export const checkRateLimit = (): boolean => {
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (!lastSubmission) return true;
    
    const lastSubmissionTime = new Date(lastSubmission).getTime();
    const now = new Date().getTime();
    const minInterval = 60000; // 1 minute between submissions
    
    return (now - lastSubmissionTime) > minInterval;
};

export const setLastSubmissionTime = (): void => {
    localStorage.setItem('lastFormSubmission', new Date().toISOString());
};

// Content validation
export const containsSuspiciousContent = (text: string): boolean => {
    const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /data:text\/html/i,
        /vbscript:/i,
        /onload=/i,
        /onerror=/i,
        /onclick=/i,
        /href\s*=\s*["']javascript:/i,
        /(viagra|cialis|lottery|prize|winner|congratulations|free money|click here)/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
};

// Name validation
export const isValidName = (name: string): boolean => {
    // Allow letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(name) && name.trim().length >= 2 && name.trim().length <= 50;
};
