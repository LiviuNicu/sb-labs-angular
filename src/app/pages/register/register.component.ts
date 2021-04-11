import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: ["", [Validators.required, Validators.minLength(5)]],
          confirm_password: [
            "",
            [Validators.required, Validators.minLength(5)],
          ],
        }
        // { validator: this.passwordConfirming }
      ),
    });
  }

  // passwordConfirming(g: AbstractControl): { invalid: boolean } {
  //   if (g.get("password").value !== g.get("confirm_password").value) {
  //     return { invalid: true };
  //   } else {
  //     return { invalid: false };
  //   }
  // }

  doRegister() {
    this.submitted = true;
    console.log(this.myForm);
    if (this.myForm.valid) {
      // call api
    }
  }
}
