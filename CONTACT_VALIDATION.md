# Contact Form Validation & Spam Protection

## Features Implemented

### 1. **Input Validation**
- **Name**: 2-50 characters, letters/spaces/hyphens/apostrophes only
- **Email**: Valid email format + permanent email address check
- **Message**: 10-2000 characters with content filtering

### 2. **Spam Protection**
- **Honeypot Field**: Hidden field that bots typically fill out
- **Rate Limiting**: 1-minute cooldown between submissions
- **Content Filtering**: Blocks suspicious patterns and common spam phrases
- **Disposable Email Detection**: Prevents temporary email addresses

### 3. **User Experience**
- **Real-time Validation**: Errors show as user types
- **Character Counter**: Shows remaining characters for message
- **Loading States**: Clear feedback during form submission
- **Accessibility**: Proper labels, ARIA attributes, keyboard navigation

### 4. **Security Measures**
- **XSS Protection**: Filters script tags and JavaScript URLs
- **Form Metadata**: Includes timestamp, user agent, and referrer
- **Input Sanitization**: Trims whitespace and validates format

## How It Works

### Spam Detection
1. **Honeypot**: Hidden field that humans won't see but bots will fill
2. **Rate Limiting**: Stores last submission time in localStorage
3. **Content Analysis**: Checks for suspicious patterns and spam keywords
4. **Email Validation**: Blocks known disposable email domains

### Error Handling
- Field-specific error messages
- Real-time validation feedback
- Server-side error display
- User-friendly error descriptions

### Form Data Sent to Formspree
```
- name (required, validated)
- email (required, validated, permanent)
- message (required, validated, filtered)
- timestamp (for spam detection)
- userAgent (for analytics)
- referrer (for source tracking)
```

## Blocked Content Examples
- Disposable emails (10minutemail.com, guerrillamail.com, etc.)
- Script tags and JavaScript protocols
- Common spam phrases (viagra, lottery, free money, etc.)
- Rapid successive submissions (< 1 minute apart)
- Empty honeypot field violations

This system significantly reduces spam while maintaining a great user experience for legitimate visitors.
