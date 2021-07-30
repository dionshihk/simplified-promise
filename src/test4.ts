import {print} from "./util";

/**
 * Demo for in-constructor error throwing
 * Demo for `catch` usage
 */

new Promise<string>((resolve, reject) => {
    print("promise constructor");

    const obj: any = {};
    print(obj.a.b);

    resolve("resolved result");
}).then(
    result => {
        print(result);
    },
    error => {
        print(error);
    }
);
