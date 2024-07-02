import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  signin(f: NgForm) {
    if (f.valid) {
      this.http.post('https://localhost:7291/api/Customers', f.value).subscribe(
        (res) => {
          console.log(res);
          // this.toastr.success('Registration successful', 'Success');
          this.router.navigateByUrl('');
          localStorage.setItem('user', JSON.stringify(f.value));
        },
        (error) => {
          console.error(error);
          // this.toastr.error('Registration failed', 'Error');
        }
      );
    } else {
      // this.toastr.warning('Please fill out all fields correctly', 'Warning');
    }
  }

  navigateToLogin(){
    this.router.navigate(['/'])
  }
}
