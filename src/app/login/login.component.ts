import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  turbineForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.turbineForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Add
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.turbineForm.valid) {
      console.log(this.turbineForm.value); // Access form data here
    }
  }
}
