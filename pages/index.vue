<template>
  <!-- <Tutorial/> -->
  <div>
    <div>env constants<span> {{ NUXT_URL }}</span></div>
    <button @click="getPdf('test')">导出 pdf</button>
    <!-- <button @click="exportPDF">导出 pdf</button> -->
    <!-- <div id="pdfDom">
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
      <p>要转为 pdf 下载的内容</p>
    </div> -->
    <!-- <div id="pdfDom">
      <Report></Report>
    </div> -->
  </div>
</template>

<script>
import Report from './report.vue'
// import GenPDF from '~/server/api/pdf'
export default {
  name: 'IndexPage',
  components: {
    Report
  },
  computed: {
    NUXT_URL(){
      return process.env.NUXT_URL
    },
    baseUrl(){
      return process.env.BASE_URL
    }
  },
  mounted(){
    this.getTodos()
  },
  methods: {
    exportPDF(){
      const el = document.querySelector('#pdfDom')

      // GenPDF()
    },

    getTodos(){
      this.$api.todos()
        .then(res => {
          console.log('成功')
        })
        .catch()
    }
  }
}
</script>

<style lang="scss" scoped>
#pdfDom {
  margin: 0 auto;
}
</style>
