import { Component } from "@angular/core";
import { UserForm } from "@app/models/user-form";
import { AuthService } from "@app/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "@app/error-dialog/error-dialog.component";
import { StorageService } from "@app/services/storage.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  form = new UserForm();

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private storageService: StorageService
  ) {}

  onSubmit() {
    const { username, email, password } = this.form;

    this.storageService.saveUser({ username, email, password: "***" });

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
        this.dialog.open(ErrorDialogComponent, {
          data: { message: err.message },
        });
      },
    });
  }
}
