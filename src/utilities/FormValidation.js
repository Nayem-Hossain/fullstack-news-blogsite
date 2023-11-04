let EmailRegx = /\S+@\S+\.\S+/;
let PhoneRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormValidation {
    IsEmpty(value) {
        return value.length === 0;
    }
    IsValidPhone(value){
        return PhoneRegx.test(value);
    }
    IsValidEmail(value) {
        return !EmailRegx.test(value);
    }
}
export const {IsEmpty, IsValidPhone, IsValidEmail} = new FormValidation();