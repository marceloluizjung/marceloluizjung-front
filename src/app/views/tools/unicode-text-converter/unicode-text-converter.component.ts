import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'unicode-text-converter',
  templateUrl: './unicode-text-converter.component.html',
  styleUrls: ['./unicode-text-converter.component.scss'],
})
export class UnicodeTextConverterComponent {
  constructor(
    public translate: TranslateService,
    private formBuilder: FormBuilder
  ) {}

  @ViewChild('inputText')
  public inputText!: ElementRef;

  @ViewChild('outText')
  public outText!: ElementRef;

  private regex = '[A-Za-z]';

  public autoCompleteSuggestions: any;

  public textConverterFormGroup: FormGroup = this.formBuilder.group({
    regex: [this.regex],
  });

  public convertText() {
    let outText = '';
    if (this.inputText.nativeElement.value) {
      outText = this.parseTextToUnicode(this.inputText.nativeElement.value);
    }
    this.outText.nativeElement.value = outText;
  }

  public parseTextToUnicode(inputText: String) {
    let unicodeString = '';
    for (var i = 0; i < inputText.length; i++) {
      let theUnicode: any = inputText[i].match(
        new RegExp(this.textConverterFormGroup.controls['regex'].value)
      );
      if (!theUnicode) {
        theUnicode = inputText.charCodeAt(i).toString(16).toUpperCase();
        while (theUnicode.length < 4) {
          theUnicode = '0' + theUnicode;
        }
        theUnicode = '\\u' + theUnicode;
        unicodeString += theUnicode;
      } else unicodeString += inputText[i];
    }
    return unicodeString;
  }

  public autoCompleteSearch() {
    this.autoCompleteSuggestions = [
      '[A-Za-z]',
      '[A-Za-z0-9 .!@#$%&*()_+-=;:,?\n]',
    ];
  }
}
