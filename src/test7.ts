import {print} from "./util";

/**
 * Demo for resolve chaining
 */

new Promise<number>(resolve => {
    print("promise constructor");

    setTimeout(() => resolve(98.1111), 1000);
})
    .then(result => {
        print(result);
        return result.toFixed(2);
    })
    .then(result => {
        print(result);
    });
