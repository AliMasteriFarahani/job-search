export const customDirectivesMixin = {
    directives:{
        disabled:{
            bind(el,binding){
                console.log(el,binding.value);
                if (binding.value === true) {
                    el.setAttribute('disabled','disabled')
                }else if(binding.value === false){
                    el.removeAttribute('disabled')
                }
            }
        }
    },
}