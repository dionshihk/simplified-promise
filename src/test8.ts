import {print} from "./util";

/**
 * Demo for resolve chaining of Promise
 */

new Promise<number>(resolve => {
    print("promise constructor");

    setTimeout(() => resolve(98.1111), 1000);
})
    .then(result => {
        print(result);
        return new Promise<string>(resolve => {
            setTimeout(() => resolve(result.toFixed(2)), 2000);
        });
    })
    .then(result => {
        print(result);
    });
