import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'formly-field-file',
    template: `
    <file-upload [formControl]="formControl" [formlyAttributes]="field" [multiple]="multiple" [animation]="animation"></file-upload>
    <small [style.display]=" error ? 'none':'block'" class="text-danger">Field is required</small>

  `,
})
// <input type="file"  [formControl]="formControl" [formlyAttributes]="field" class="form-control py-1">
export class FormlyFieldFile extends FieldType {
    multiple: boolean = false;
    animation: boolean = true;
    error: boolean = false;
    destroy$ = new Subject<any>();
    
    constructor() {
        super();
        // this.error = this.field.formControl.valueChanges;
    }
    ngAfterViewInit() {
        console.log(this.field.formControl)
            this.field.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((d:any)=>{
                this.error = d.length === 0 ?false:true;
            });

    }

    ngOnDestroy(){
        this.destroy$.next();
        this.destroy$.complete();

    }
}


