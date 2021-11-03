export const calender = {
methods:{
    calender(){
        class Calender{
            constructor(){
                
            }
            getFullYear(){
               return  new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728))
            }
            getYear(){
                let fullYear = this.getFullYear()
                let year = fullYear.split('/');
                return year[0];
            }
        }
        let calender = new Calender();
        return calender;
    }
}
}