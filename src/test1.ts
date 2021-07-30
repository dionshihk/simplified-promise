import {print} from "./util";

/**
 * Demo for execution sequence
 */

print("start");

new Promise<void>(resolve => {
    print("promise constructor");
    resolve();
});

print("end");
