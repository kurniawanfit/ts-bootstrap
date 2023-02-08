module.exports = {
  apps: [
    {
      name: 'ts-bootstrap',
      script: './build/server.js',
      instances: '2',
      exec_mode: 'cluster',
      autorestart: true,
      watch: ['./build/*'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      exp_backoff_restart_delay: 1000,
      max_memory_restart: '200M',
      log_file: './logs/app.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      time: true,
      combine_logs: true,
      env: {
        SERVICE_NAME: 'ts-bootstrap',
        NODE_ENV: 'local',
        BE_PORT: 9999,
        DB_HOST: 'localhost',
        DB_NAME: 'pinjammodal',
        DB_USER: 'U2FsdGVkX1+fqpyhWWLYpxbfm72pAJWILsASrTJxq+s=',
        DB_PASS: 'U2FsdGVkX19ppaXgX8bL4EHUvxZyT2MQxLRSMUF1Jz8=',
        DB_PORT: 5432,
        HEADER_TOKEN: 'YNexpycHPr7jaGoXvBhzi5UdRwbQVCTLK9DZuO1sqF4WtI30AgJSnME6lkm28f',
        REDIS_HOST: '127.0.0.1',
        REDIS_PORT: 6379,
        REDIS_CRYPT: 'U2FsdGVkX1+75qEKxsZ7wNwUGFKkKYKJbxyjnXWXaGJ8ksfvuJIONvpAV3TL4AvWhc3ddatS3D6lZPmnRBxK8A==',
        JWT_SECRET: 'MjA1OHFWZDFab1RXM21JQkRDaEVLY1VQbndiT05lcGdYTTdydHlSSmp6a2ZGYVlpQWw5eFFIdkc2c1M0THU=',
        OTHER_SERVICE_URL: 'https://google.com'
      },
      env_development: {
        SERVICE_NAME: 'ts-bootstrap',
        NODE_ENV: 'development',
        BE_PORT: 9999,
        DB_HOST: 'localhost',
        DB_NAME: 'pinjammodal',
        DB_USER: 'U2FsdGVkX1+fqpyhWWLYpxbfm72pAJWILsASrTJxq+s=',
        DB_PASS: 'U2FsdGVkX19ppaXgX8bL4EHUvxZyT2MQxLRSMUF1Jz8=',
        DB_PORT: 5432,
        HEADER_TOKEN: 'YNexpycHPr7jaGoXvBhzi5UdRwbQVCTLK9DZuO1sqF4WtI30AgJSnME6lkm28f',
        REDIS_HOST: 'localhost',
        REDIS_PORT: 6379,
        REDIS_CRYPT: 'U2FsdGVkX1+rwGMNm6Z0s86PUMpNpqLxWzIXzYqkTfeKtEjHePVJRUKbVMJUBEx+',
        JWT_SECRET: 'MjA1OHFWZDFab1RXM21JQkRDaEVLY1VQbndiT05lcGdYTTdydHlSSmp6a2ZGYVlpQWw5eFFIdkc2c1M0THU=',
        OTHER_SERVICE_URL: 'https://google.com'
      },
      env_production: {
        SERVICE_NAME: 'ts-bootstrap',
        NODE_ENV: 'production',
        BE_PORT: 9999,
        DB_HOST: 'pinjammodal-rds-prod-private.pgsql.ap-southeast-5.rds.aliyuncs.com',
        DB_NAME: 'pinjammodal',
        DB_USER: 'U2FsdGVkX19XD0bYU349cDt+ZHS/2FTvxgefQlUrlf5uXhOk8n2KajZ/ibEjSrLP',
        DB_PASS: 'U2FsdGVkX19dyio+rF0dnWNM+MFDuWCUPzMHjtve7kcQO47HXOGusJ82Rf72MsKE',
        DB_PORT: 3433,
        HEADER_TOKEN: 'p6kxHhRqQotywnC7vGlKP5FMZAg4biODWcT9LVNmuEYfBaI3srjU2eXdzS1J80',
        REDIS_HOST: 'r-d9j7pu6txmcwr6ewii.redis.ap-southeast-5.rds.aliyuncs.com',
        REDIS_PORT: 6379,
        REDIS_CRYPT: 'U2FsdGVkX18sxIGOO80plhO11/3zmWIerY2mzkx9cUTcTj7PqJYijNNdvzBoA7Jr4CF76I94efZhIjMZ8mL5DA==',
        JWT_SECRET: 'aUJUNENuOXphaG9ZRzhPTjNwRGRNVlhBMEZ1STdVU3hxZmtjSGxzNXRQS2cxMlFqeUpydldlTDZSYkV3bVo=',
        OTHER_SERVICE_URL: 'https://google.com'
      }
    }
  ]
};
