export const assertNever: (arg: never) => never = (arg): never => {
    throw new Error(`Unexpected arg: ${arg}`);
}