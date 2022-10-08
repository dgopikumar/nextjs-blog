const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'dbuser',
                mongodb_password: '8hVqj5htjOTAOuaB',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'BlogDB'
            }
        };
    }

    return {
        env: {
            mongodb_username: 'dbuser',
            mongodb_password: '8hVqj5htjOTAOuaB',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'BlogDB'
        }
    };
};