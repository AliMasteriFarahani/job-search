export const saveJobCollectMixin = {
    data() {
        return {
          employeeId:1,
          oldClass: '',
          key: null,
        };
      },
      methods: {
    
        changeSaveStatus(jobId, isSaved, key) {
          this.$store.dispatch("changeJobSaveStatusInServer", {
            jobId,
            empId:this.$store.getters.getEmployeeId,
            isSaved,
            isCurrent: 0,
          });
          this.$store.commit("setIsJobSaved", -1);
          this.key = key;
          if (isSaved == 1) {
            this.oldClass = "fa-solid";
          } else {
            this.oldClass = "fa-regular";
          }
        },
      },
    
      computed: {
        saveIcon() {
          return (index, job) => {
            if (this.key == index) {
              job.isSaved = this.getIsJobSaved;
            }
    
            let className;
            if (job.isSaved == 1) {
              className = "fa-solid";
            } else if (job.isSaved == 0) {
              className = "fa-regular";
            } else {
              className = this.oldClass;
            }
    
            return `<i class='fa-bookmark ${className} font-105'></i>`;
          };
        }
    }
}