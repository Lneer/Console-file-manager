import { homedir } from 'os';

export const startDir = `${homedir()}`;
export const faledOperation = new Error('FS operation is failed');
export const invalidInput = new Error('Invalid Input');