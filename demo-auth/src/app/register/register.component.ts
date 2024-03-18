import { Component } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  onSubmit() {
    const { username, email, password } = this.form;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  }
}
