import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-links-sharing',
  templateUrl: './links-sharing.component.html',
  styleUrls: ['./links-sharing.component.scss'],
})
export class LinksSharingComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form = this.fb.group({

    // });
  }
}
