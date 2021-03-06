import {print} from "./util";

/**
 * Demo for static helper function: Promise.resolve
 */

Promise.resolve("a").then(
    result => {
        print("resolved");
        print(result);
    },
    error => {
        print("rejected");
        print(error);
    }
);
