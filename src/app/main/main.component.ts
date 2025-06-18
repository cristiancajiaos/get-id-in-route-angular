import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public userId: string | null = '';
  private route = inject(ActivatedRoute);

  component() {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
