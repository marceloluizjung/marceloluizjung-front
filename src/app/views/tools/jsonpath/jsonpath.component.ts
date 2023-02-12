import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './jsonpath.component.html',
  styleUrls: ['./jsonpath.component.scss'],
})
export class JSONPathComponent {
  constructor(private formBuilder: FormBuilder) {}

  public formGroup: FormGroup = this.formBuilder.group({
    path: [String(), Validators.required],
    input: [String(), Validators.required],
    output: [String(), Validators.required],
  });

  public onSubmit() {}
}
