import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  // Travailler avec la route active
  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {

    // Gestion des paramètres qui passe par notre url
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
