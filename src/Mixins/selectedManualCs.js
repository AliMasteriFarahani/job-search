export const selectedManual = {
    methods:{
        selectedManual(ref,arr, obj,reset=false) {
          if (reset ==true) {
          ref.querySelectorAll('.custom-select select option').forEach(el=>{
            el.removeAttribute('selected');
            el
            .closest(".custom-select")
            .querySelector(".custom-option-selected").innerText = 'انتخاب کنید ...';
           let clickEvent = new Event("change");
           el.dispatchEvent(clickEvent);
         })
          }else{
            let clickEvent = new Event("change");
            ref.querySelectorAll(".custom-select select").forEach((element) => {
              if (arr.includes(element.id)) {
                if (
                  obj[element.id] != "" &&
                  obj[element.id] != 0 &&
                  obj[element.id] != undefined
                ) {
                  let option = element.querySelector(
                    `option[value="${obj[element.id]}"]`
                  );
                  let text = option.innerText;
                  element.querySelectorAll('option').forEach(opt=>{
                    opt.removeAttribute('selected')
                  })
                 option.setAttribute("selected", "selected");
                  element
                    .closest(".custom-select")
                    .querySelector(".custom-option-selected").innerText = text;
                    element.dispatchEvent(clickEvent);
                }
              }
            });
          }
           
          },
    }
}