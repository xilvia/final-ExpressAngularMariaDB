import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = new User;
  

  constructor(
    private us: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
  }


  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.us.create(this.user).subscribe(
      user => {
        this.router.navigateByUrl("/")
      }, err => console.error(err)

    )

  }
}
