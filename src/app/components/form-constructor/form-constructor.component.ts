import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormServiceService } from '../../services/form-service.service'

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})
export class FormConstructorComponent implements OnInit {
  form:any = FormGroup;
  formSettings: any = {};
  formArrow:string[] = []
  formItem:any = FormGroup
  console = console
  slug:string = ''
  FormServiceService: any;
  item:any = FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    // this.FormServiceService.getForm().subscribe(
    //     (response: any) => {
    //     console.log('>>>', response)
    //     this.formSettings = response;
    //     this.buildForm();
    //     this.addItem()
    //   },
    //   (error: any) => {
    //     console.error('Ошибка при получении настроек:', error);
    //   }
    // )
    // console.log('get',this.FormServiceService.getForm)


    this.http.get('https://staging.lobsterlab.io/test_task.php').subscribe(

    
      (response: any) => {
        console.log('>>>', response)
        this.formSettings = response;
        this.buildForm();
        this.addItem()
      },
      (error: any) => {
        console.error('Ошибка при получении настроек:', error);
      }
    );
  }

  buildForm() {
    const formControls:any = {};
    for (const field of this.formSettings.fields) {
      console.log(field)
      const validators = field.validation.includes('required') ? [Validators.required] : [];
      formControls[field.slug] = ['', validators];
    }
    this.form = this.formBuilder.group(formControls);
    console.log('form', this.form)
  }

  onSubmit() {
    
    // this.form.value
    // if (this.form.valid) {
    //   console.log('Значения формы:', this.form.value);
    // } else {
    //   console.log('Форма содержит ошибки');
      
    // }

    this.formItem.value
    if (this.formItem.valid) {
      console.log('Значения формы:', this.formItem.value);
    } else {
      console.log('Форма содержит ошибки');
      
    }
  }

  addItem() {
    const formControls:any = {};
    for (const field of this.formSettings.fields) {
      // console.log(field)
      
      // this.formArrow.push(formControls)
      const validators = field.validation.includes('required') ? [Validators.required] : [];
      formControls[field.slug] = ['', validators];
    }
    this.formItem = this.formBuilder.group(formControls);


    this.formArrow.push(this.form)
    // this.formArrow.push(this.formItem.value)
    console.log('item', this.formItem)
    console.log('arrow', this.formArrow)
  }


  DeleteItem() {
    // delete this.formArrow[0]
    this.formArrow.splice(0, 1)
    console.log('hi')
  }
  // field(field: string): void {
  //   throw new Error('Method not implemented.');
  // }
}

//////////////////////////

// buildForm() {
//   this.form = this.createFormGroup(this.formSettings.fields);
// }

// createFormGroup(fields: any[]): FormGroup {
//   const formControls: any = {};
//   for (const field of fields) {
//     const validators = field.validation.includes('required') ? [Validators.required] : [];
//     formControls[field.slug] = ['', validators];
//     if (field.type === 'repeater') {
//       formControls[field.slug] = this.createFormGroup(field.fields);
//     }
//   }
//   return this.formBuilder.group(formControls);
// }

// // updateFormValidity(formGroup: FormGroup | AbstractControl) {
// //   formGroup.updateValueAndValidity();
// //   Object.values(formGroup.controls).forEach((control) => {
// //     if (control instanceof FormGroup || control instanceof AbstractControl) {
// //       this.updateFormValidity(control);
// //     }
// //   });
// // }

// updateFormValidity(formGroup: FormGroup | AbstractControl) {
//   formGroup.updateValueAndValidity();
//   if (formGroup instanceof FormGroup) {
//     const controls = formGroup.controls;
//     Object.keys(controls).forEach((controlName) => {
//       const control = controls[controlName];
//       if (control instanceof FormGroup || control instanceof AbstractControl) {
//         this.updateFormValidity(control);
//       }
//     });
//   }
// }

// onSubmit() {
//   this.updateFormValidity(this.form);
//   if (this.form.valid) {
//     console.log('Значения формы:', this.form.value);
//   } else {
//     console.log('Форма содержит ошибки');
//     // Выполните дополнительные действия для отображения сообщений об ошибках пользователю
//   }
// }
// }