import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './jsonpath.component.html',
  styleUrls: ['./jsonpath.component.scss'],
})
export class JSONPathComponent {
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {}

  public formGroup: FormGroup = this.formBuilder.group({
    path: [String(), Validators.required],
    input: [String(), Validators.required],
    output: [String(), Validators.required],
  });

  public jsonPathOptionsItems: MenuItem[] = [
    {
      label: this.translate.instant('marceloluizjungfront.ident'),
      icon: 'pi pi-code',
      command: () => {
        this.formGroup.controls['input'].setValue(
          JSON.stringify(
            JSON.parse(this.formGroup.controls['input'].value),
            null,
            2
          )
        );

        this.formGroup.controls['output'].setValue(
          JSON.stringify(
            JSON.parse(this.formGroup.controls['output'].value),
            null,
            2
          )
        );
      },
    },

    {
      label: this.translate.instant('marceloluizjungfront.jsonpathexpressions'),
      icon: 'pi pi-list',
      command: () => {
        this.visibleExpressions = this.visibleExpressions ? false : true;
      },
    },
  ];

  public visibleExpressions: boolean = false;

  public onSubmit() {
    debugger;
  }
}
