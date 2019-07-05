import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  
  public ItemsForSubCatogery1 = [];
  public ItemsForSubQuestion = [];
  public ItemsForSubQuestion2 = [];

  public ProductHeader = [{ name: '-' },{ name: 'Country of origin' }, { name: 'Languages'}, { name: 'Technology' },{name:"Applications and Visits"},{name:"Use of the content"},{name:"User Typology"}];  
   
  public listItemsByOrgin = [{ name: '-' },{ name: 'Local' }, { name: 'Non Local'}]; 
  public listItemsLanguege = [{ name: '-' },{ name: 'Institution Languages' }, { name: 'Device Languages'},{ name: 'User Languages'},{name:'Application Languages'}]; 
  public listItemsByOS = [{ name: '-' },{ name: 'ios' }, { name: 'android'}]; 
  public listItemsTime = [{ name: '-' },{ name: 'AM/PM' }, { name: 'Day'}, { name: 'Week'}, { name: 'Month'}]; 
  public listItemsExhibits = [{ name: '-' },{ name: 'Exhibits' }, { name: 'Exhibitions'}]; 
  public listItemsUsetypeLogy = [{ name: '-' },{ name: 'Ceramica Visitors' }, { name: 'Non Ceramica Visitors'}]; 


  public QuestionCuntryOrgin1 = [{ name: '-' },{ name: 'How many local people are visting in each month' }, { name: 'How many local people are visiting in each week'}]; 
  public QuestionCuntryOrgin2 = [{ name: '-' },{ name: 'How many Non local people are visting in each month' }, { name: 'How many Non local people are visiting in each week'}]; 

  public QuestinByDay = [{ name: '-' },{ name: 'On which day of the month there are highest number of visitors from each country and language are visiting ceramica.' }, { name: 'On which day of the month there are highest number of visitors from each country and language visiting after ceramica.'}]; 

  public selectedValue: string = "Medium";

  selectedDay: string = '';


  selectChangeHandler (event: any) {


 if(event.target.value == "Country of origin"){
  this.ItemsForSubQuestion = this.listItemsByOrgin;
 }else if(event.target.value == "Languages"){
  this.ItemsForSubQuestion = this.listItemsLanguege;
 }else if(event.target.value == "Technology"){
  this.ItemsForSubQuestion = this.listItemsByOS;
 }else if(event.target.value == "Applications and Visits"){
  this.ItemsForSubQuestion = this.listItemsTime;
 }else if(event.target.value == "Use of the content"){
  this.ItemsForSubQuestion = this.listItemsExhibits;
 }else if(event.target.value == "User Typology"){
  this.ItemsForSubQuestion = this.listItemsExhibits;
 }
 console.log(event.target.value);
    
  }


  selectChangeHandlerSub1 (event: any) {
    if(event.target.value == "Local"){
     this.ItemsForSubQuestion2 = this.QuestionCuntryOrgin1;
    }else if(event.target.value == "Non Local"){
     this.ItemsForSubQuestion2 = this.QuestionCuntryOrgin2;
    }else if(event.target.value == "Day"){
     this.ItemsForSubQuestion2 = this.QuestinByDay;
    }else if(event.target.value == "Applications and Visits"){
     this.ItemsForSubQuestion2 = this.listItemsTime;
    }else if(event.target.value == "Use of the content"){
     this.ItemsForSubQuestion2 = this.listItemsExhibits;
    }else if(event.target.value == "User Typology"){
     this.ItemsForSubQuestion2 = this.listItemsExhibits;
    }
       
    console.log(event.target.value);
     }


     selectChangeHandlerSub2 (event: any) {
      console.log(event.target.value);
      if(event.target.value == "How many local people are visting in each month"){
        location.pathname = "/month_localsComponent";
    }else if(event.target.value == "How many local people are visiting in each week"){
      location.pathname = "/Weeklocals";
    }else if(event.target.value == "On which day of the month there are highest number of visitors from each country and language visiting after ceramica."){
      location.pathname = "/bycountry";
    }else if(event.target.value == "Applications and Visits"){
      location.pathname = "/bycountry";
    }
  }
  
  ngOnInit() {
  }

}
