import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



function copyText(content) {
    navigator.clipboard.writeText(content)
    .then(() => {
        Toast.fire({
        icon: 'success',
        title: 'Copied!'
        })
    })
    .catch(err => console.error(err))
}

export {copyText}