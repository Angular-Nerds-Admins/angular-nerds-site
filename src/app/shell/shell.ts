import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Panel } from "../panel/panel";

@Component({
  selector: 'an-shell',
  imports: [RouterOutlet, RouterLink, Panel],
  templateUrl: './shell.html',
  styleUrl: './shell.css'
})
export class Shell {

}
