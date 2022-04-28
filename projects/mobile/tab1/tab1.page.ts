import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'projects/shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  private _subscription = new Subscription();

  constructor(private sharedService: SharedService) { }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._subscription.add(
      this.sharedService.userSubject.subscribe(data => {
        console.log(data);
      })
    )
  }

}
