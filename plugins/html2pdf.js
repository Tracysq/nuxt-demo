import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function (title, isShowPreviewFullTime) {
      html2canvas((document.querySelector('#pdfDom')), {
        allowTaint: false,
        useCORS: true,
        x: 450,
        y: 30
      }).then(function (canvas) {
        const pageWidth = 595.28
        const pageHeight = canvas.height / (canvas.width / 592.28)
        const pageData = canvas.toDataURL('image/jpge', 1.0)
        const PDF = new jsPDF('', 'pt', [pageWidth, pageHeight])
        PDF.addImage(pageData, 'JPEG', 0, 0, pageWidth, pageHeight)
        PDF.save(title + '.pdf')
      })
    }
  }
}
