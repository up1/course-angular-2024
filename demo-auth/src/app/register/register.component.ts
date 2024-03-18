import { Component } from "@angular/core";
import { UserForm } from "../models/user-form";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  form: UserForm = new UserForm();

  onSubmit() {
    const { username, email, password } = this.form;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  }
}
