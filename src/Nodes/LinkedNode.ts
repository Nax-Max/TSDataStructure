/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of LinkedNode items.
 */
export class LinkedNode<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _value: T | null;
    private _next?: LinkedNode<T> | null;

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(value?: T | null, next?: LinkedNode<T>) {
        this._value = value;
        this._next = next;
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Set given value to the node
     * */
    public setValue(_value: T): LinkedNode<T> | null {

        if (!this) {
            return null;
        }

        this._value = _value;
        return this;

    }

    /**
     * Returns value
     * */
    public getValue(): T | null {

        return this._value;

    }

    /**
     * Returns 'Next' node
     * */
    public getNext(): LinkedNode<T> | null {
        return !this._next ? null : this._next;
    }

    /**
     * Sets given SingleListNode as 'Next' node to the 'Current' node
     * */
    public setNext(next: LinkedNode<T> | null): LinkedNode<T> | null {

        this._next = next;

        return this._next;

    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
