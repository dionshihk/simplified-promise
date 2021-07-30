import {print} from "./util";

/**
 * Demo for in-constructor reject
 * Demo for resolve/reject in single `then`
 */

new Promise<string>((resolve, reject) => {
    print("promise constructor");
    reject(new Error("Boom"));
}).then(
    result => {
        print(result);
    },
    error => {
        print(error);
    }
);
