type Status = "RESOLVED" | "REJECTED" | "PENDING";

type ConstructorArg<T> = {};
type ResolveFn = {};
type RejectFn = {};

type OnResolveArg = {};
type OnRejectArg = {};

export class DionPromise<T> {
    constructor(executor: ConstructorArg<T>) {}

    then() {}

    catch() {}
}
