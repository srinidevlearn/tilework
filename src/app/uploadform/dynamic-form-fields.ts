import { FormlyFieldConfig } from "@ngx-formly/core";

export const dynamicUploadFormFields = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                  className: 'col-12',
                  template: '<div class="alert alert-primary text-center" role="alert">Upload Product related informations</div>',
                },
            {
                className: 'col-6',
                type: 'input',
                key: 'productTitle',
                templateOptions: {
                    label: 'Product Title',
                    required:true,
                },
            },
            {
                className: 'col-6',
                type: 'input',
                key: 'lastName',
                templateOptions: {
                    label: 'Product Category',
                    required:true,

                },
                expressionProperties: {
                    // 'templateOptions.disabled': '!model.productTitle',
                },
            },
            {
                className: 'col-12',
                type: 'textarea',
                key: 'productDescription',
                templateOptions: {
                    label: 'Product Description',
                    required:true,

                },
            },
            {
                className: 'col-12',
                key: 'file',
                type: 'file',
                templateOptions: {
                    label: 'Product Upload',
                    required:true,

                    
                },
            },
        ],
    },
 
   
];