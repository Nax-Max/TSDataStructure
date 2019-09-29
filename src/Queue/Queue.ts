/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of queue items.
 */
export class Queue<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _store: T[] = [];

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {

    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    push(val: T) {

        this._store.push(val);
    }

    pop(): T | null {

        if (this._store.length > 0) {
            return this._store.shift();
        }

        return null;
    }

    size(): number {

        return this._store.length;
    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
