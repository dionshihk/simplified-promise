import {print} from "./util";

/**
 * Demo for in-constructor error throwing
 * Demo for `catch` usage
 */

new Promise<string>(resolve => {
    print("promise constructor");

    const obj: any = {};
    print(obj.a.b);

    resolve("resolved result");
}).catch(error => {
    print("rejected");
    print(error);
});
