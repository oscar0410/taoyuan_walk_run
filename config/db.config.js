module.exports = {
    HOST: "192.168.1.138",    // Host Name
    USER: "postgres",     // User Name
    PASSWORD: "ITS54290414",    // Password
    DB: "cg_running",         // Database Name
    dialect: "postgres",  // 資料庫類別
    pool: {
        max: 5,             //　連結池中最大的 connection 數
        min: 0,
        acquire: 30000,     //　連結 Timeout 時間(毫秒)
        idle: 10000         //　連結被釋放的 idle 時間(毫秒)
    },
    dialectOptions: {
        useUTC: false, // for reading from database
    },
    TIMEZONE: 'Asia/Taipei', // for writing to database
};
