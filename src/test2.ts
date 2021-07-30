import {print} from "./util";

/**
 * Demo for in-constructor resolve
 */

new Promise<string>(resolve => {
    print("promise constructor");
    resolve("resolved result");
}).then(result => {
    print(result);
});
