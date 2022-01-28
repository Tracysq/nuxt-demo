<template>
  <input v-model="value" class="ipv6-input" type="text" @blur="onBlur" />
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    splitString(str, separator = " ") {
      return str.split(separator).filter((item) => {
        if (item != "") {
          return item;
        }
      });
    },
    validateIp(ip) {
      const matchReg = /^([a-f0-9]{1,4}:){7}[a-f0-9]{1,4}$/i;
      const ret = ip.match(matchReg);
      // console.log(ret);
      const classList = this.$el.classList;
      if (ret) {
        if (classList.contains("error")) {
          classList.remove("error");
        }
      } else {
        if (!classList.contains("error")) {
          this.$el.classList.add("error");
        }
      }
    },
    onBlur() {
      let ip = this.value;
      if (!ip.trim()) return;
      if (ip.includes("::") && ip.match(/::/g).length === 1) {
        // short format
        let tempArr = this.splitString(ip, "::");
        const index = ip.indexOf("::");
        let val = ip.replace(/::/, ":");
        const arr = this.splitString(val, ":");
        let str = "";
        for (let i = 0; i < 8 - arr.length; i++) {
          if (i !== 8 - arr.length - 1) {
            str += "0:";
          } else {
            str += "0";
          }
        }
        console.log(tempArr);
        if (index > 0) {
          tempArr.splice(1, 0, str);
        } else {
          tempArr.splice(0, 0, str);
        }
        ip = tempArr.join(":");
      }
      console.log(ip);
      this.validateIp(ip);
    },
  },
};
</script>

<style lang="scss" scoped>
.ipv6-input {
  &.error {
    outline-offset: 0px;
    outline: red auto 1px;
  }
}
</style>
