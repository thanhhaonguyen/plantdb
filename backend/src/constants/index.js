import HTTP_STATUS from './httpStatus.constants.js';
import ERROR_CODE from './errorCodes.constants.js';
import CONFIG from './config.constants.js';
import ROLE from './roles.constants.js';

import VN_MESSAGE from './message/vn.message.js'
import EN_MESSAGE from './message/en.message.js';

const LANG = process.env.APP_LANG || 'en';
const MESSAGE_MAP = {
    vn: VN_MESSAGE,
    en: EN_MESSAGE
};
const MESSAGE = MESSAGE_MAP[LANG] || EN_MESSAGE

export {HTTP_STATUS, ERROR_CODE, CONFIG, ROLE, MESSAGE};