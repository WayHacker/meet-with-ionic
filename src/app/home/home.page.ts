import { Component } from '@angular/core';

interface UserData{
  username: string
  phone: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title : string = "MyApp"
  input_name : string = "John Doe"
  input_phone : string = "+"
  set_value : string = "__"
  user_list : UserData[] = []
  set_my_value(){
    this.user_list.push({username:this.input_name, phone:this.input_phone})
    this.set_value = this.input_name
  }
  
  
  constructor() {   
  }


}
