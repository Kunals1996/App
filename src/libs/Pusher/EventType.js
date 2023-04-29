/**
 * See https://github.com/Expensify/Web-Expensify/tree/main/lib/Push/Event for the various
 * types of Pusher events sent by our API.
 */
export default {
    REPORT_COMMENT: 'reportComment',
    PREFERRED_LOCALE: 'preferredLocale',
    EXPENSIFY_CARD_UPDATE: 'expensifyCardUpdate',
    SCREEN_SHARE_REQUEST: 'screenshareRequest',
    ONYX_API_UPDATE: 'onyxApiUpdate',
    USER_IS_TYPING: 'client-userIsTyping',
    MULTIPLE_EVENTS: 'multipleEvents',
    MULTIPLE_EVENT_TYPE: {
        ONYX_API_UPDATE: 'onyxApiUpdate',
    },
};
