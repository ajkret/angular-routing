import { Component, OnInit } from '@angular/core';

import { Server, ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //Will be resolved by ServerResolverService
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    /*
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    */
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }
}
