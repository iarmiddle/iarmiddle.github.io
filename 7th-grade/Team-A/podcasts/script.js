function wrap() {
    const list = document.getElementsByClassName("wrap-bottom");
    for (let i = 0; i < list.length; i++) {
        const e = list[i];
        const text = e.innerText;
        let genText = ""
        let last_j = -1
        let lineEnd = text.length
        let cText = ""

        e.style.whiteSpace = "initial"
        const originWidth = e.offsetWidth;

        e.style.whiteSpace = "nowrap"
        e.innerText = cText

        for (let j = text.length - 1; j > -1; j--) {
            cText = text.charAt(j) + cText;
            e.innerText = cText
            if (text.charAt(j) == " ") {
                last_j = j
            }

            if (e.offsetWidth > originWidth) {
                if (cText.match(" ")) {
                    genText = "<br>" + text.slice(last_j, lineEnd) + genText;
                    j = last_j
                } else {
                    genText = "-<br>" + text.slice(j, lineEnd) + genText;
                }
                e.innerText = "";
                cText = ""
                lineEnd = j
            }
        }

        genText = cText + genText;

        // e.style.whiteSpace = "initial"
        e.innerHTML = genText;

        console.log(e.offsetWidth, originWidth, genText)
    }
}

wrap()

window.addEventListener("resize", function () { this.location.reload() })