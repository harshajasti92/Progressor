import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data: any[] = [{question:'Identify the nouns in the sentence: There is a big pond in the park.',options:{a:'big,is',b:'pond,there',c:'pond,park',d:'a,in'},answer:'c',level:1,category:'Parts of Speech'},
      {question:'Identify the nouns in the sentence: There is a big pond in the park.',options:{a:'big,is',b:'pond,there',c:'pond,park',d:'a,in'},answer:'d',level:1,category:'Parts of Speech'},
      {question:'Identify the nouns in the sentence: There is a big pond in the park.',options:{a:'big,is',b:'pond,there',c:'pond,park',d:'a,in'},answer:'a',level:1,category:'Parts of Speech'},
      {question:'Identify the nouns in the sentence: There is a big pond in the park.',options:{a:'big,is',b:'pond,there',c:'pond,park',d:'a,in'},answer:'b',level:1,category:'Parts of Speech'},
      {question:'Identify the nouns in the sentence: There is a big pond in the park.',options:{a:'big,is',b:'pond,there',c:'pond,park',d:'a,in'},answer:'c',level:1,category:'Parts of Speech'}
    ];

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    // console.log(this.data.options);
  }

  optionA(x){
    console.log(x);
  }

}
