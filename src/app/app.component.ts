import { Component } from '@angular/core';
import {Question} from '../class/question';
import {RadioButton} from '../class/question';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V1playbook';
  questions: Question[] = [];
  question = 'question' ;
  nbQuestion = 0;
  addText(): void{
    const theQuestion = new Question(this.question , 'text');
    this.questions.push(theQuestion);
    // this.questions.push('<input type="text" name="question' + this.nbQuestion + '" placholder="' + this.question + '">');
  }
  addParagraphe(): void{
    const theQuestion = new Question(this.question , 'paragraphe');
    this.questions.push(theQuestion);
  }
  addRadio(): void{
    const radios: string[] = ['zozo', 'zaza' , 'zizi'];
    const theRadio = new RadioButton(this.question, 'radio', radios, radios.length);
    this.questions.push(theRadio);
  }
  getText(value): void{
    if ( value !== ''){
      console.log(value);
    }
  }
}
