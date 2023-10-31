import { ObservableFactory } from "marcs-observable";
export type { IObservable } from "marcs-observable";

const booksChild = ObservableFactory.create(() => []);
const booksParent = ObservableFactory.create(() => booksChild.value);
const booksGrandParent = ObservableFactory.create(() => booksParent.value);

export { booksChild, booksParent, booksGrandParent };
