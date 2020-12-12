window.addEventListener('DOMContentLoaded', function() {

    const btnSubs = document.getElementById("subs");
    const btnRst = document.getElementById("rst")
    const btnSend = document.getElementById("send")
    const btnBuy = document.getElementById("buy")
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const msg = document.getElementById("message")
    const inptSub = document.getElementById("subi")



    btnSubs.addEventListener('click', function() {
        alert("Cпасибо за твой Эмеил. Мы пришлем тебе подписку!")
        return inptSub.value = ""

    })
    btnRst.addEventListener('click', function() {
        return name.value = "", email.value = "", msg.value = "";
    })
    btnSend.addEventListener('click', function() {
        alert("К сожалению на данный момент Даниил не настроил данную функцию чтобы оно отправляло куда то твою информацию(")
    })
    btnBuy.addEventListener('click', function() {
        alert("К сожалению на данный момент Даниил не настроил данную функцию чтобы можно было что то купить, но скоро!(")
    })

})