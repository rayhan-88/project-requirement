

    export const IsLater = (value)=> {
        let  OnlyLaterRegx =/^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/
        return OnlyLaterRegx.test(value);
    }
    export const IsEmail = (value)=> {
        let EmailRegx = /\S+@\S+\.\S+/;
        return EmailRegx.test(value);
    }
    export const IsMobile = (value)=> {
        let  MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        return MobileRegx.test(value);
    }
    export const IsNumber = (value)=> {
        let  OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }
    export const IsNull = (value)=> {
        return value == null;
    }
    export const  IsEmpty = (value)=> {
        return value.length === 0;
    }
