import Swal, { SweetAlertIcon } from 'sweetalert2';

export const alertDialog = (title:string,text:string,icon:SweetAlertIcon)=> {
    Swal.fire({title: title,text: text,icon: icon})
}