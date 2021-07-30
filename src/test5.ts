import {print} from "./util";

/**
 * Demo for multiple resolve
 */

new Promise<number>(resolve => {
    print("promise constructor");

    resolve(1);
    resolve(2);

    setTimeout(() => resolve(3), 1000);
}).then(result => {
    print(result);
});
