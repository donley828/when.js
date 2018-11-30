import { day_template } from './template';

const _NOW = new Date();

function calcDay() {
  
}

export function when(inputTime: string):string {
  const index = new Date(inputTime).getDate() - _NOW.getDate();
  console.log(new Date(inputTime).getDate(), _NOW.getDate())
  return day_template[index.toString()];
}