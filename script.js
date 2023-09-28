function tabuada(){
    let num = document.getElementById('numero').value
    let tab = document.getElementById('seltab')

    if(num.length == 0){
        alert('Por favor, digite um número!')
    } else{
        let n = Number(num)
        let i = 1
        tab.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
            i++
        }
    }

}