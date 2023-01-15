let info = false

document.getElementById("headerInfo").addEventListener("click", function () {
    if (info == false) {
        info = true
        document.getElementById("headerInfoContainer").style.display = "block";
        document.querySelector(".pageHeader .mainHeader").style.borderRadius = "8px 8px 0 0"
    } else {
        info = false
        document.getElementById("headerInfoContainer").style.display = "none";
        document.querySelector(".pageHeader .mainHeader").style.borderRadius = "8px"
    }
})