export {};

declare global {
    namespace jest {
        interface Matchers<R> {
            arrayEqualityByOrder<T>(arrCompared: T[]): R;
        }
    }
}