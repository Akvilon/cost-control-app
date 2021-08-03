

export type Action<T> = {
    type: T;
    payload?: T
}