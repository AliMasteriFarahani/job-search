<template>
   <div
    class="modal z-index-lv0 fade"
    id="remove-lang"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="remove-lang-label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5
            class="modal-title color--danger font-1 font-md-is"
            id="remove-lang-label"
          >
            هشدار !
          </h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6">
              <p>آیتم مورد نظر حذف شود ؟</p>
            </div>

            <div class="col-12">
              <button @click="removeLanguageSkill()"
                class="
                  btn btn--close
                  float-end
                  border-radius-05
                  px-3
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-90
                  text-white
                "
              >
                حذف
              </button>
              <button
                type="button"
                class="
                  btn btn--cancel
                  float-end
                  border-radius-05
                  px-3
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-90
                  text-white
                  me-2
                "
                data-bs-dismiss="modal"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
props:{
    langId:{
        Number
    }
},
data(){
return{
    employeeId:1
}
},
methods:{
     ...mapActions(['removeLanguageSkillFromServer','getAllLanguageSkillsFromServer','getEmployeeId']),
    removeLanguageSkill(){
        this.removeLanguageSkillFromServer(this.langId).then(()=>{
            this.getAllLanguageSkillsFromServer(this.getEmployeeId);
        })
    }
}
}
</script>

<style>

</style>