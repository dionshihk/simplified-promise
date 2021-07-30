import {print} from "./util";

/**
 * Demo for a future resolve
 */

new Promise<number>(resolve => {
    print("promise constructor");

    setTimeout(() => resolve(100), 1000);
}).then(result => {
    print(result);
});
