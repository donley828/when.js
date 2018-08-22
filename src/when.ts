import { day_template } from './template';

const _NOW = new Date();

console.log(day_template["0"]);

export function when(inputTime: string) {
  return `Hello from ${inputTime}`;
}