<template>
   <div
    class="modal z-index-lv0 fade"
    id="remove-edu"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="remove-edu-label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5
            class="modal-title color--danger font-1 font-md-is"
            id="remove-edu-label"
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
              <button @click="removeEducation()"
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
import { mapActions, mapGetters } from "vuex";
export default {
props:{
    eduId:{
        Number
    }
},
data(){
return{
    employeeId:1
}
},
computed:{
...mapGetters(['getEmployeeId'])
},
methods:{
    ...mapActions(['removeEducationFromServer','getAllEducationsFromServer']),
    removeEducation(){
        this.removeEducationFromServer(this.eduId).then(()=>{
            this.getAllEducationsFromServer(this.getEmployeeId);
        })
    }
}
}
</script>

<style>

</style>