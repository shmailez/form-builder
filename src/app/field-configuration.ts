// export interface FieldConfiguration {
// }

export interface FieldConfiguration {
    slug: string;
    title: string;
    placeholder: string;
    type: 'text' | 'checkbox' | 'repeater';
    configuration: TextConfiguration | CheckboxConfiguration | RepeaterConfiguration;
    validation: Validator[];
  }
  
  export  interface TextConfiguration {
    minLength?: number;
    maxLength?: number;
  }
  
  export  interface CheckboxConfiguration {
    list: string[];
  }
  
  export  interface RepeaterConfiguration {
    addButtonTitle: string;
    fields: FieldConfiguration[];
  }
  
  export  interface Validator {
    type: 'required' | 'custom'; // Добавьте другие типы валидаторов, если необходимо
    message: string;
  }