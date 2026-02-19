const GOOGLE_SHEETS_CONFIG = {
    // Default sheet ID for user data
    DEFAULT_SHEET_ID: '1G6tTHT56T6FmqOwOvVFVPoVqoSs-TSBz_-SiW9imQvk',
    DEFAULT_GID: '0'
};

// Telegram Configuration (WhatsApp removed)
const TELEGRAM_CONFIG = {
    ENABLED: true, // Set to false to completely disable
    BOT_TOKEN: '8355903870:AAHLCnFWPwwzk7Q22gpvV8ITEmzBjqthB8Q',
    CHAT_ID: '5903174042',
    MESSAGE_TEMPLATE: {
        LOGIN: "🔔 *New User Login* 🔔\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n👥 Role: {role}\n📅 Date: {date}\n⏰ Time: {time}\n🌐 IP: {ip}",
        QUIZ_RESULT: "📊 *Quiz Result* 📊\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n📚 Subject: {subject}\n📖 Chapter: {chapter}\n✅ Correct: {correct}\n📋 Total: {total}\n🔷 Attempted: {attempted}\n📈 Score: {percentage}%\n⏱️ Time Taken: {timeTaken}\n📅 Date: {date}"
    }
};

// Admin Notification Settings - FIXED
const ADMIN_CONFIG = {
    NOTIFY_ON_LOGIN: false, // Admin won't get login notifications
    NOTIFY_ON_QUIZ_RESULT: false // Admin won't get quiz notifications
};

// Logo configuration
const LOGO_CONFIG = {
    src: 'logo.png',
    alt: 'G. S. Tutorial Logo',
    width: '40px',
    height: '40px'
};

// Logging Configuration
const LOGGING_CONFIG = {
    ENABLE_CONSOLE_LOG: true,
    LOG_LEVEL: 'INFO',
    AUTO_SEND_NOTIFICATIONS: true
};
