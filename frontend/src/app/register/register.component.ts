import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  selectedFile: File | null = null;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // Handles file input changes and assigns selected file to selectedFile
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
  
      // Creating profile object with file properties
     
    }
  }
  

  // Handles form submission
  onSubmit(): void {
    const { username, email, password,latitude, longitude } = this.form;

    // Check if a file is selected before submitting

    const profile = {
      type: this.selectedFile?.type ?? '',  // If type is undefined or null, use an empty string
      name: this.selectedFile?.name ?? '',  // If name is undefined or null, use an empty string
      path: `./uploads/${this.selectedFile?.name ?? ''}` // Corrected string interpolation using backticks
    };
    
    console.log(profile); // Logs profile object
    
    if (this.selectedFile) {
      // const formData = {
      //   name:username,
      //   email:email,
      //   password:password,
      //   profile_image:profile,
      //   latitude:latitude,
      //   longitude:longitude,
      //   file_name:this.selectedFile.name
      // }
      // formData.append('username', username);
      // formData.append('email', email);
      // formData.append('password', password);
      // formData.append('profileImage', this.selectedFile, this.selectedFile.name);
      const formData = new FormData();
formData.append('username', this.form.username);  // 'LinkTasksadsc'
formData.append('email', this.form.email);        // 'senthamilansurya@gmail.com'
formData.append('password', this.form.password);  // 'asdsasadf'
formData.append('profile_image', this.selectedFile);  // File object
formData.append('latitude', this.form.latitude);  // '2'
formData.append('longitude', this.form.longitude); // '2'

   console.log(formData);
      this.authService.register(formData).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    } else {
      // Display error message if no file is selected
      this.errorMessage = 'Please select a profile image.';
      this.isSignUpFailed = true;
    }
  }
}
