export const API_BASE_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

export const FIREBASE_CONFIG = {
    API_KEY: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    MEASUREMENT_ID: import.meta.env.VITE_MEASUREMENT_ID,
}

export const ROUTES = {
    HOME: import.meta.env.VITE_HOME,
    LOGIN: import.meta.env.VITE_LOGIN,
    REGISTER: import.meta.env.VITE_REGISTER,

    PROFILE: import.meta.env.VITE_PROFILE,
    EDIT_PROFILE: import.meta.env.VITE_EDIT_PROFILE,
    EXPENSES: import.meta.env.VITE_LIST_EXPENSES,
    ADD_EXPENSES: import.meta.env.VITE_ADD_EXPENSES,
    EDIT_EXPENSES: import.meta.env.VITE_EDIT_EXPENSES,
    DELETE_EXPENSES: import.meta.env.VITE_DELETE_EXPENSES
}