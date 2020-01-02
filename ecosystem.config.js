module.exports = {
    apps: [{
        name: 'node-app',
        script: 'app/index.js',
        args: '',
        instances: 1,
        watch: true,
        max_memory_restart: '100M',
        listen_timeout: 3000,
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'https://github.com/onlyil/node-server.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
