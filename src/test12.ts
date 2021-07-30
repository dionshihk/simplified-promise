import {print} from "./util";

/**
 * Demo for static helper function: Promise.race
 */

const p1 = new Promise<string>(resolve => setTimeout(() => resolve("1s"), 1000));
const p2 = new Promise<string>(resolve => setTimeout(() => resolve("2s"), 2000));
const p3 = new Promise<string>(resolve => setTimeout(() => resolve("3s"), 3000));

// const p3 = Promise.resolve("immediate resolve");
// const p3 = Promise.reject(new Error("Boom"));

print("start");

Promise.race([p1, p2, p3]).then(
    result => {
        print(result);
    },
    error => {
        print(error);
    }
);
