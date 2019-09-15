import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: User;
 

  constructor(
    private us: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = + (this.ar.snapshot.params['id'])
    this.us.getOne(id).subscribe(user => { this.user = user[0] });
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.us.update(this.user).subscribe(
      user => {
        this.router.navigateByUrl("/")

      }, err => console.error(err)

    )

  }
}
