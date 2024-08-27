export class OutOfContext extends Error {
 constructor() {
  super('context is out of range');
 }
}
