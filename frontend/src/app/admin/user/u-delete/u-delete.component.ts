import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.css']
})
export class UDeleteComponent implements OnInit {

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
