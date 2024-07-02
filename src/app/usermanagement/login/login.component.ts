import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    // private toastr: ToastrService,
  ) {}

  login(user: NgForm) {
    if (user.valid) {
      this.authService.getbyuser(user.value.username).subscribe(
        (res: any) => {
          console.log(res);
          const login = res.find((a: any) => a.username === user.value.username && a.password === user.value.password);
          if (login) {
            localStorage.setItem('user', JSON.stringify(login));
            console.log('Login successful');
            // this.toastr.success('Login successful', 'Success');
            this.router.navigate(['/']);
          } else {
            console.log('Login failed');
            // this.toastr.error('Invalid username or password', 'Error');
          }
        },
        (error: any) => {
          console.error('Error fetching user data:', error);
          // this.toastr.error('An error occurred while trying to log in. Please try again later.', 'Error');
        }
      );
    } else {
      console.log('Form is invalid');
      // this.toastr.warning('Please fill in all required fields', 'Warning');
    }
  }
}
