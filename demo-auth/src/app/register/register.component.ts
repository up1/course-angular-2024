import { Component } from "@angular/core";
import { UserForm } from "../models/user-form";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  form = new UserForm();

  constructor(private authService: AuthService) {}

  onSubmit() {
    const { username, email, password } = this.form;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
