import {
  registerFormComponent,
  registerFormItemComponent
} from '@formily/react-schema-renderer'
import { CompatNextForm as Form } from './Form'
import {
  CompatNextFormItem as FormItem,
  CompatNextFormItemProps as FormItemProps
} from './FormItem'

registerFormComponent(Form)

registerFormItemComponent(FormItem)

export { FormItemProps, FormItem }
