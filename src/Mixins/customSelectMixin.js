export const customSelectMixin = {
  mounted(){
    class CustomSelect {
      constructor() {
        this.options = [];
        this.optionsObj = [];
        this.optionFiltered = this.optionsObj;
        this.createElements();
        this.checkOptionsSelected();
    
      }
      checkOptionsSelected(){
        document.querySelectorAll('.custom-select select').forEach(select => {
            select.querySelectorAll('option').forEach(option => {
              option.hasAttribute('selected');
              if (option.hasAttribute('selected')) {
                option.closest('.custom-select').querySelector('.custom-option-selected').textContent = option.textContent;
              }
            });
        });
      }
      getOptions() {
        this.optionsObj = [];
        for (let i = 0; i < this.options.length; i++) {
          this.optionsObj.push({
            value: this.options[i].value,
            text: this.options[i].textContent,
          });
        }
      }
      createOptions(e) {
        let customOptionContainer = e.target.parentElement.querySelector(
          ".custom-select-item-container .custom-select-items"
        );
        customOptionContainer.innerHTML = "";
        if (this.optionFiltered.length !== 0) {
          for (let k = 0; k < this.optionFiltered.length; k++) {
            this.createItem(
              "custom-option-item",
              this.optionFiltered[k].value,
              this.optionFiltered[k].text,
              customOptionContainer
            );
          }
        } else {
          this.createItem(
            "custom-option-item cs-not-found-text",
            "",
            "داده ای یافت نشد",
            customOptionContainer
          );
        }
      }
    
      // create item for option
      createItem(className, dataValue, dataText, customOptionContainer) {
        let customOption = document.createElement("DIV");
        customOption.setAttribute("class", className);
        customOption.setAttribute("data-value", dataValue);
        customOption.innerText = dataText;
        customOptionContainer.appendChild(customOption);
      }
    
      createElements() {
        let customSelects = document.querySelectorAll(".custom-select");
        customSelects.forEach((element) => {
          let customOptionSelectedDiv = document.createElement("DIV");
          customOptionSelectedDiv.classList.add("custom-option-selected");
          let title = element.getAttribute("title");
          customOptionSelectedDiv.innerText = title;
          element.prepend(customOptionSelectedDiv);
    
          // create custom-select-container
          let customSelectContainer = document.createElement("DIV");
          customSelectContainer.classList.add(
            "custom-select-container",
            "d-none",
            "bg-white"
          );
          if (element.hasAttribute('data-search-box')) {
            let isInputAv = element.getAttribute('data-search-box');
            if (isInputAv === 'true') {
              let input = document.createElement("INPUT");
              input.setAttribute("type", "search");
              input.setAttribute("placeholder", "جست و جو کنید ...");
              input.classList.add("search-inp");
              customSelectContainer.appendChild(input);
            }else{
              element.classList.add('simple')
            }
          }
    
          let customSelectItemContainer = document.createElement("DIV");
          customSelectItemContainer.classList.add("custom-select-item-container");
          customSelectContainer.appendChild(customSelectItemContainer);
          let customSelectItems = document.createElement("DIV");
          customSelectItems.classList.add("custom-select-items");
          customSelectItemContainer.appendChild(customSelectItems);
          console.log(element.childNodes);
          element.insertBefore(customSelectContainer, element.childNodes[1]);
        });
      }
    
      // show and hide content of select
      dropdownSelect(e) {
        let customOptionSelectedTag = e.target;
        if (customOptionSelectedTag.classList.contains("custom-option-selected")) {
          this.options =
            customOptionSelectedTag.parentElement.querySelectorAll("select option");
          let i = 0;
          document.querySelectorAll(".custom-select").forEach((item) => {
            let customSelectContainer = item.querySelector(
              ".custom-select-container"
            );
            customSelectContainer.setAttribute("data-sl", `${i}`);
            if (
              customSelectContainer.getAttribute("data-sl") !==
              customOptionSelectedTag.nextElementSibling.getAttribute("data-sl")
            ) {
              customSelectContainer.classList.add("d-none");
              item
                .querySelector(".custom-option-selected")
                .classList.remove("active");
            }
            i++;
          });
    
          
          customOptionSelectedTag.parentElement.querySelector(".custom-select-container").classList.toggle("d-none");
          customOptionSelectedTag.classList.toggle("active");
    
          if(customOptionSelectedTag.closest('.custom-select').getAttribute('data-search-box') === 'true'){
          let inpSearch = customOptionSelectedTag.parentElement.querySelector(".search-inp");
          inpSearch.value = "";
          inpSearch.focus();
          }
    
    
          this.getOptions();
          this.onInput("", e);
          this.createOptions(e);
        }
      }
    
      // when click on document exept custom select it must close all custom selects
      closeAllCustomSelect(e) {
        if (
          !e.target.classList.contains("custom-option-selected") &&
          !e.target.classList.contains("search-inp") &&
          !e.target.classList.contains("cs-not-found-text")
        ) {
          document.querySelectorAll(".custom-select").forEach((item) => {
            item
              .querySelector(".custom-option-selected")
              .classList.remove("active");
            item.querySelector(".custom-select-container").classList.add("d-none");
          });
        }
      }
      // select an option when it's selected in main select (add selected attribute)
      selectOption(e) {
        if (
          e.target.classList.contains("custom-option-item") &&
          !e.target.classList.contains("cs-not-found-text")
        ) {
          let customOptionText = e.target.innerText;
          let customOptionValue = e.target.getAttribute("data-value");
          let customOptionSelected = e.target.closest(
            ".custom-select-container"
          ).previousElementSibling;
          let originalOptionSelect = e.target
            .closest(".custom-select")
            .querySelector(`select option[value='${customOptionValue}']`);
          let originalSelectedOption = e.target
            .closest(".custom-select-container")
            .nextElementSibling.querySelector(`option[selected]`);
          customOptionSelected.innerText = customOptionText;
          originalSelectedOption
            ? originalSelectedOption.removeAttribute("selected")
            : "";
          originalOptionSelect.setAttribute("selected", "");
        }
      }
    
      // when enter something in the search box
      onInput(text, e) {
        text === ""
          ? (this.optionFiltered = this.optionsObj)
          : (this.optionFiltered = this.filterSearch(text));
        this.createOptions(e);
      }
      filterSearch(filterText) {
        return this.optionsObj.filter((el) => {
          return el.text.match(filterText);
        });
      }
    }
    
    let CustomSelectObj = new CustomSelect();
    
    //  Event Listeners
    function eventListeners() {
      document.querySelectorAll(".custom-select").forEach((element) => {
        element.addEventListener("click", dropdownSelect);
        element.addEventListener("click", selectOption);
        element.addEventListener("input", onInput);
      });
      document.addEventListener("click", closeAllCustomSelect);
    }
    
    eventListeners();
    
    // Functions
    function closeAllCustomSelect(e) {
      CustomSelectObj.closeAllCustomSelect(e);
    }
    
    function dropdownSelect(e) {
      CustomSelectObj.dropdownSelect(e);
    }
    
    function selectOption(e) {
      CustomSelectObj.selectOption(e);
    }
    
    function onInput(e) {
      CustomSelectObj.onInput(e.target.value, e);
    }
    
  }
}