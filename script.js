const minus=document.getElementById("minus")
const plus=document.getElementById("plus")
plus.onclick=()=>{
value.innerText++
calculateTotal();  
}
minus.onclick=()=>{
  if(value.innerText>1)
value.innerText--
calculateTotal() }
 function calculateTotal() {
    const inbill = document.getElementById("bill");
    const intip = document.getElementById("tip");
    const total = document.getElementById("total");
   const value=document.getElementById("value")
   const clear=document.getElementById("but")
   const dived=parseInt(value.innerText)
   console.log(dived)
   const res = (parseInt(inbill.value) + parseInt(intip.value))
      total.value=parseInt(res/dived)
   total.innerText=total.value
// console.log(inbill)
// console.log(intip)
// console.log(total)
   clear.onclick=()=>{
  total.value=0
  inbill.value=0
  intip.value=0
  value.innerText=1
}
 }
