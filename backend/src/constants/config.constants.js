const CONFIG = {
    TOKEN_EXPIRE_TIME: process.env.ACCESS_TOKEN_EXPIRE_TIME || '20s',
    REFRESH_TOKEN_EXPRITE: process.env.REFRESH_TOKEN_EXPRITE || '30d'
}

export default CONFIG;