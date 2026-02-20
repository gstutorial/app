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
        AUTO_LOGOUT: true,
        ENABLE_SERVICE_WORKER: true,
        CACHE_VERSION: 'v1'
    },
    
    // Feature Flags
    FEATURES: {
        ENABLE_PDF_REPORTS: true,
        ENABLE_QUESTION_REVIEW: true,
        ENABLE_IMAGE_ZOOM: true,
        ENABLE_WHATSAPP_SUPPORT: true,
        ENABLE_TIMER: true,
        ENABLE_RANDOMIZE: true,
        ENABLE_QUESTION_NAVIGATION: true,
        ENABLE_PROGRESS_BAR: true,
        ENABLE_SCORE_TRACKING: true
    },
    
    // UI Configuration
    UI: {
        THEME_COLOR: '#0f172a',
        PRIMARY_GRADIENT: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 100%)',
        SUCCESS_COLOR: '#22c55e',
        ERROR_COLOR: '#ef4444',
        WARNING_COLOR: '#f59e0b',
        INFO_COLOR: '#3b82f6',
        LOGIN_LOGO_SIZE: '70px',
        HEADER_LOGO_SIZE: '50px',
        CLASS_ICON_SIZE: '2rem',
        SUBJECT_ICON_SIZE: '2.5rem'
    },
    
    // Messages
    MESSAGES: {
        LOGIN: {
            SUCCESS: 'Login successful!',
            INVALID: 'Invalid username or password',
            COOLDOWN: 'Too many failed attempts. Please wait {seconds} seconds.',
            REQUIRED: 'Please enter both username and password',
            LOADING: 'Authenticating...'
        },
        QUIZ: {
            CONFIRM_FINISH: 'Are you sure you want to finish the quiz?',
            NO_QUESTIONS: 'No questions available',
            LOADING: 'Loading questions...',
            COMPLETED: 'Quiz Completed!',
            TIME_UP: 'Time\'s up! Finishing quiz...',
            START: 'Choose a chapter and click Start',
            SELECT_CHAPTER: 'Select a chapter to start'
        },
        SUBSCRIPTION: {
            EXPIRED: 'Your subscription has expired. Please contact admin.',
            EXPIRING_SOON: 'Your subscription will expire soon.',
            UNLIMITED: 'Unlimited access',
            ACTIVE: 'Subscription active'
        },
        ERRORS: {
            NETWORK: 'Network error. Please check your connection.',
            SERVER: 'Server error. Please try again later.',
            LOADING: 'Error loading data. Please refresh.',
            UNAUTHORIZED: 'Unauthorized access. Please login again.',
            NOT_FOUND: 'Resource not found'
        }
    },
    
    // Performance Messages (based on percentage)
    PERFORMANCE_REMARKS: {
        EXCELLENT: {
            min: 80,
            message: 'OUTSTANDING! Excellent performance! Keep up the great work!',
            color: '#22c55e',
            emoji: '🌟'
        },
        GOOD: {
            min: 60,
            message: 'GOOD JOB! Solid performance with room for improvement.',
            color: '#f59e0b',
            emoji: '👍'
        },
        SATISFACTORY: {
            min: 40,
            message: 'SATISFACTORY. Review the chapter and practice more.',
            color: '#3b82f6',
            emoji: '📚'
        },
        NEEDS_IMPROVEMENT: {
            min: 0,
            message: 'NEEDS IMPROVEMENT. Study the chapter thoroughly and retry.',
            color: '#ef4444',
            emoji: '💪'
        }
    },
    
    // Image Configuration
    IMAGES: {
        PRELOAD_CONCURRENT: 3,
        MAX_ZOOM: 1.5,
        SUPPORTED_FORMATS: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        CACHE_ENABLED: true,
        MAX_CACHE_SIZE: 50, // number of images
        PLACEHOLDER_IMAGE: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%233b82f6\' opacity=\'0.1\'/%3E%3Ctext x=\'50\' y=\'50\' font-family=\'Arial\' font-size=\'14\' fill=\'%239ca3af\' text-anchor=\'middle\' dy=\'.3em\'%3EImage%3C/text%3E%3C/svg%3E'
    },
    
    // PDF Configuration
    PDF: {
        PAGE_SIZE: 'a4',
        ORIENTATION: 'portrait',
        COMPANY_NAME: 'G.S. Tutorial',
        FOOTER_TEXT: '© 2025 G.S. Tutorial. All rights reserved.',
        LOGO_SIZE: 35, // mm
        MARGIN: 20, // mm
        COLORS: {
            PRIMARY: [59, 130, 246],
            SUCCESS: [34, 197, 94],
            WARNING: [245, 158, 11],
            DANGER: [239, 68, 68],
            BACKGROUND: [15, 23, 42],
            TEXT_PRIMARY: [226, 232, 240],
            TEXT_SECONDARY: [148, 163, 184],
            BORDER: [75, 85, 99]
        },
        FONTS: {
            TITLE_SIZE: 22,
            HEADING_SIZE: 14,
            NORMAL_SIZE: 10,
            SMALL_SIZE: 8
        }
    },
    
    // Timer Configuration
    TIMER: {
        WARNING_THRESHOLD: 30 * 60 * 1000, // 30 minutes in ms
        CRITICAL_THRESHOLD: 10 * 60 * 1000, // 10 minutes in ms
        UPDATE_INTERVAL: 1000, // 1 second
        WARNING_COLOR: '#f59e0b',
        CRITICAL_COLOR: '#ef4444',
        NORMAL_COLOR: '#60a5fa'
    },
    
    // Navigation Configuration
    NAVIGATION: {
        DEFAULT_COLLAPSED: true,
        GRID_COLS: {
            desktop: 'repeat(auto-fill, minmax(40px, 1fr))',
            tablet: 'repeat(auto-fill, minmax(35px, 1fr))',
            mobile: 'repeat(auto-fill, minmax(30px, 1fr))'
        },
        STATS_VISIBLE: true
    },
    
    // Question Configuration
    QUESTION: {
        OPTION_LABELS: ['A', 'B', 'C', 'D', 'E', 'F'],
        MAX_OPTIONS: 6,
        SHOW_EXPLANATION: true,
        HIGHLIGHT_CORRECT: true,
        ALLOW_RANDOMIZE: true
    },
    
    // Logging Configuration
    LOGGING: {
        ENABLE_CONSOLE_LOG: true,
        LOG_LEVEL: 'INFO', // DEBUG, INFO, WARN, ERROR
        ENABLE_ACTIVITY_TRACKING: true,
        ACTIVITY_LOG_INTERVAL: 60000 // 1 minute
    },
    
    // Cache Configuration
    CACHE: {
        ENABLED: true,
        CONFIG_DURATION: 5 * 60 * 1000, // 5 minutes
        SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours
        IMAGE_DURATION: 7 * 24 * 60 * 60 * 1000 // 7 days
    },
    
    // Breakpoints for responsive design
    BREAKPOINTS: {
        MOBILE: 480,
        TABLET: 768,
        DESKTOP: 1024,
        WIDE: 1280
    }
};

// Logo Configuration
const LOGO_CONFIG = {
    src: 'logo.png',
    fallbackSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%233b82f6\'/%3E%3Ctext x=\'50\' y=\'50\' font-family=\'Arial\' font-size=\'40\' fill=\'white\' text-anchor=\'middle\' dy=\'.3em\'%3EGS%3C/text%3E%3C/svg%3E',
    alt: 'G. S. Tutorial Logo',
    width: '40px',
    height: '40px',
    loginSize: '70px',
    headerSize: '50px',
    borderRadius: '12px'
};

// Admin Notification Settings (can be overridden by user role)
const ADMIN_CONFIG = {
    NOTIFY_ON_LOGIN: false,      // Whether to notify admin on user login
    NOTIFY_ON_QUIZ_RESULT: false, // Whether to notify admin on quiz completion
    NOTIFY_ON_SUBSCRIPTION_EXPIRY: true,
    NOTIFY_ON_ERROR: true,
    NOTIFY_ON_NEW_USER: true
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

📋 My Concern: `,
    BUTTON_SIZE: '25px',
    BUTTON_POSITION: 'top-right'
};

// Class Icons Mapping (dynamic - will be enhanced by Apps Script)
const CLASS_ICONS = {
    'JE': '🛠️',
    'Class 8': '🎓',
    'Class 9': '📖',
     'Class 10': '✎',
    'default': '📚'
};

// Subject Icons Mapping (dynamic - will be enhanced by Apps Script)
const SUBJECT_ICONS = {
    'mathematics': '📐',
    'science': '🔬',
    'physics': '⚡',
    'chemistry': '🧪',
    'biology': '🧬',
    'mechanical': '⚙️',
    'electrical': '⚡',
    'english': '📖',
    'hindi': '🔤',
    'sanskrit': '🕉️',
    'social': '🌍',
    'history': '🏛️',
    'geography': '🗺️',
    'economics': '📊',
    'computer': '💻',
    'default': '📚'
};

// Export configurations (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_CONFIG,
        LOGO_CONFIG,
        ADMIN_CONFIG,
        WHATSAPP_CONFIG,
        CLASS_ICONS,
        SUBJECT_ICONS
    };
}
