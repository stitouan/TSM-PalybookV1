import {Injectable} from '@angular/core';

@Injectable()
export class Question{
  private inputType: string ;
  private question: string ;
  constructor(question , inputType) {
    this.question = question;
    this.inputType = inputType;
  }
  getInputType(): any {
    return this.inputType;
  }
  getQuestion(): any{
    return this.question;
  }
}
export  class RadioButton extends Question {
  private listRadio: string[];
  private numRadio: number;
  constructor(question, inputType, listRadio: string[], numRadio: number) {
    super(question, inputType);
    this.listRadio = listRadio;
    this.numRadio = numRadio;
  }
  getListRadio(): string[]{
    return this.listRadio;
  }
  getNumRadio(): any{
    return this.numRadio;
  }

}
