import {print} from "./util";

/**
 * Demo for static helper function: Promise.all
 */

const p1 = new Promise<string>(resolve => setTimeout(() => resolve("1s"), 1000));
const p2 = new Promise<string>(resolve => setTimeout(() => resolve("2s"), 2000));
const p3 = "pure string";
const p4 = Promise.resolve("immediate resolve");

// const p3 = Promise.reject(new Error("Boom"));

print("start");

Promise.all([p1, p2, p3, p4]).then(
    result => {
        print(result);
    },
    error => {
        print(error);
    }
);
