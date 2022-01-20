<template>
  <div class="wrapper">
    <div class="segment" v-for="(item, index) in segements" :key="index">
      <input
        :value="item"
        :maxlength="4"
        @input="onInput($event, index)"
        @keydown="onKeyDown($event, index)"
        type="text"
      />
      <span class="colon" v-show="index !== segements.length - 1">:</span>
    </div>
  </div>
</template>

<script>
function getRange(el) {
  var cuRange;
  var tbRange;
  var headRange;
  var range;
  var dupRange;
  var ret = {};
  if (el.setSelectionRange) {
    // standard
    ret.begin = el.selectionStart;
    ret.end = el.selectionEnd;
    ret.result = el.value.substring(ret.begin, ret.end);
  } else if (document.selection) {
    // ie
    if (el.tagName.toLowerCase() === "input") {
      cuRange = document.selection.createRange();
      tbRange = el.createTextRange();
      tbRange.collapse(true);
      tbRange.select();
      headRange = document.selection.createRange();
      headRange.setEndPoint("EndToEnd", cuRange);
      ret.begin = headRange.text.length - cuRange.text.length;
      ret.end = headRange.text.length;
      ret.result = cuRange.text;
      cuRange.select();
    } else if (el.tagName.toLowerCase() === "textarea") {
      range = document.selection.createRange();
      dupRange = range.duplicate();
      dupRange.moveToElementText(el);
      dupRange.setEndPoint("EndToEnd", range);
      ret.begin = dupRange.text.length - range.text.length;
      ret.end = dupRange.text.length;
      ret.result = range.text;
    }
  }
  el.focus();
  return ret;
}

export default {
  data() {
    return {
      segements: ["", "", "", "", "", "", "", ""],
    };
  },
  computed: {
    len() {
      return this.segements.length;
    },
  },
  methods: {
    onInput(event, index) {
      let value = event.target.value;

      this.segements[index] = value;
    },

    onKeyDown(event, index) {
      const keyCode = event.keyCode;
      const el = event.target
      const value = el.value;
      console.log(keyCode);
      if (keyCode === 37 || keyCode === 8) {
        // left || backspace
        if (index > 0 && (value.length === 0 || getRange(el).end === 0)) {
          this.$el.getElementsByTagName("input")[index - 1].focus();
          event.preventDefault();
        }
      } else if (keyCode == 39) {
        // right
        if (index < this.len - 1 && getRange(el).end === value.length) {
          this.$el.getElementsByTagName("input")[index + 1].focus();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-flex;
  border: 1px solid #000;
  font-size: 0;
  width: auto;
}

.segment {
  input {
    font-size: 16px;
    border: none;
    width: 4em;
    text-align: center;
  }

  .colon {
    font-size: 14px;
    margin: 0 5px;
  }
}
</style>
