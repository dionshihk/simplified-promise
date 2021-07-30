import {print} from "./util";
import * as Process from "process";

/**
 * Demo for
 * - micro-task (Promise resolve)
 * - macro-task (Timer, Immediate)
 */

print("start");

setImmediate(() => print("immediate"));

new Promise<void>(resolve => {
    print("constructor");
    resolve();
}).then(() => {
    print("resolved");
});

print("end");
