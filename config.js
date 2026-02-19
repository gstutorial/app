// config.js - Public configuration only
// No sensitive data - safe to be publicly visible

const APP_CONFIG = {
    // App Information
    APP_NAME: 'G.S. Tutorial',
    CREATOR: 'Gobind Sharma',
    VERSION: '2.0.0',
    
    // Contact Information (public)
    CONTACT: {
        PHONE: '9706195457',
        EMAIL: 'gobind.bngn@gmail.com',
        WHATSAPP: '919706195457',
        WEBSITE: 'https://gstutorial.github.io/app'
    },
    
    // App Settings
    SETTINGS: {
        INACTIVITY_TIMEOUT: 10, // minutes
        MAX_LOGIN_ATTEMPTS: 3,
        LOGIN_COOLDOWN: 30, // seconds
        SESSION_DURATION: 24, // hours
        AUTO_LOGOUT: true
    },
    
    // Feature Flags
    FEATURES: {
        ENABLE_PDF_REPORTS: true,
        ENABLE_QUESTION_REVIEW: true,
        ENABLE_IMAGE_ZOOM: true,
        ENABLE_WHATSAPP_SUPPORT: true,
        ENABLE_TIMER: true,
        ENABLE_RANDOMIZE: true
    },
    
    // UI Configuration
    UI: {
        THEME_COLOR: '#0f172a',
        PRIMARY_GRADIENT: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 100%)',
        LOGIN_LOGO_SIZE: '70px',
        HEADER_LOGO_SIZE: '50px'
    },
    
    // Messages
    MESSAGES: {
        LOGIN: {
            SUCCESS: 'Login successful!',
            INVALID: 'Invalid username or password',
            COOLDOWN: 'Too many failed attempts. Please wait {seconds} seconds.',
            REQUIRED: 'Please enter both username and password'
        },
        QUIZ: {
            CONFIRM_FINISH: 'Are you sure you want to finish the quiz?',
            NO_QUESTIONS: 'No questions available',
            LOADING: 'Loading...',
            COMPLETED: 'Quiz Completed!'
        },
        SUBSCRIPTION: {
            EXPIRED: 'Your subscription has expired. Please contact admin.',
            EXPIRING_SOON: 'Your subscription will expire soon.'
        }
    },
    
    // Performance Messages (based on percentage)
    PERFORMANCE_REMARKS: {
        EXCELLENT: {
            min: 80,
            message: 'OUTSTANDING! Excellent performance! Keep up the great work!',
            color: '#22c55e'
        },
        GOOD: {
            min: 60,
            message: 'GOOD JOB! Solid performance with room for improvement.',
            color: '#f59e0b'
        },
        SATISFACTORY: {
            min: 40,
            message: 'SATISFACTORY. Review the chapter and practice more.',
            color: '#3b82f6'
        },
        NEEDS_IMPROVEMENT: {
            min: 0,
            message: 'NEEDS IMPROVEMENT. Study the chapter thoroughly and retry.',
            color: '#ef4444'
        }
    },
    
    // Image Configuration
    IMAGES: {
        PRELOAD_CONCURRENT: 3,
        MAX_ZOOM: 1.5,
        SUPPORTED_FORMATS: ['jpg', 'jpeg', 'png', 'gif', 'webp']
    },
    
    // PDF Configuration
    PDF: {
        PAGE_SIZE: 'a4',
        ORIENTATION: 'portrait',
        COMPANY_NAME: 'G.S. Tutorial',
        FOOTER_TEXT: '© 2025 G.S. Tutorial. All rights reserved.',
        COLORS: {
            PRIMARY: [59, 130, 246],
            SUCCESS: [34, 197, 94],
            WARNING: [245, 158, 11],
            DANGER: [239, 68, 68],
            BACKGROUND: [15, 23, 42],
            TEXT_PRIMARY: [226, 232, 240],
            TEXT_SECONDARY: [148, 163, 184]
        }
    },
    
    // Logging Configuration
    LOGGING: {
        ENABLE_CONSOLE_LOG: true,
        LOG_LEVEL: 'INFO', // DEBUG, INFO, WARN, ERROR
        ENABLE_ACTIVITY_TRACKING: true
    }
};

// Logo Configuration
const LOGO_CONFIG = {
    src: 'logo.png',
    alt: 'G. S. Tutorial Logo',
    width: '40px',
    height: '40px',
    loginSize: '70px',
    headerSize: '50px'
};

// Admin Notification Settings (can be overridden by user role)
const ADMIN_CONFIG = {
    NOTIFY_ON_LOGIN: false,      // Whether to notify admin on user login
    NOTIFY_ON_QUIZ_RESULT: false, // Whether to notify admin on quiz completion
    NOTIFY_ON_SUBSCRIPTION_EXPIRY: true
};

// WhatsApp Support Configuration
const WHATSAPP_CONFIG = {
    ENABLED: true,
    PHONE_NUMBER: '919706195457',
    DEFAULT_MESSAGE: 'Hello Admin, I need help with G.S. Tutorial App.',
    QUESTION_TEMPLATE: `Hello Admin,

I have a question about this question:

👤 Name: {name} ({username})
🏫 Class: {class}
📚 Subject: {subject}
📖 Chapter: {chapter}

❓ Question: {question}

📝 Options:
{options}

✅ Correct Answer: {correctAnswer}

📋 My Concern: `
};

// Export configurations (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_CONFIG,
        LOGO_CONFIG,
        ADMIN_CONFIG,
        WHATSAPP_CONFIG
    };
}
