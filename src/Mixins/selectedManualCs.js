export const selectedManual = {
    methods:{
        selectedManual(arr, obj) {
            let clickEvent = new Event("change");
            document.querySelectorAll(".custom-select select").forEach((element) => {
              if (arr.includes(element.id)) {
                if (
                  obj[element.id] != "" &&
                  obj[element.id] != 0 &&
                  obj[element.id] != undefined
                ) {
                  let option = element.querySelector(
                    `option[value='${obj[element.id]}']`
                  );
                  let text = option.innerText;
                  option.setAttribute("selected", "selected");
                  element
                    .closest(".custom-select")
                    .querySelector(".custom-option-selected").innerText = text;
                }
                element.dispatchEvent(clickEvent);
              }
            });
          },
    }
}