
export enum PATHES {
    HOME='/',
    HISTORY='/history',
    NOT_FOUND='/404',
    REDIRECT='/*'
}

export default Object.freeze({
    mainFirebaseUrl: process.env.REACT_APP_BASE_URL,
})