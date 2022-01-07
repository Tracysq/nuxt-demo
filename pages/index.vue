<template>
  <!-- <Tutorial/> -->
  <div>
    <button @click="getPdf('test')">导出 pdf</button>
    <div id="pdfDom">要转为 pdf 下载的内容</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
