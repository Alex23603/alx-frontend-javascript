/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

// Declare the types for CRUD functions
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
