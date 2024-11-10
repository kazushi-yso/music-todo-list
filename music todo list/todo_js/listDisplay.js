document.addEventListener("DOMContentLoaded",() => {
    const soloCheckbox = document.getElementById("list_bar_solo")
    const backingCheckbox = document.getElementById("list_bar_backing")
    const riffCheckbox = document.getElementById("list_bar_riff")

    const solo = document.querySelector(".list_1")
    const backing = document.querySelector(".list_2")
    const riff = document.querySelector(".list_3")

    /*solo.style.display = "none";
    backing.style.display = "none";
    riff.style.display = "none";*/

    soloCheckbox.addEventListener("change",() => {
        solo.style.visibility = soloCheckbox.checked ? 'visible' : 'hidden';
    });

    backingCheckbox.addEventListener("change", () => {
        backing.style.visibility = backingCheckbox.checked ? 'visible' : 'hidden';
    });

    riffCheckbox.addEventListener("change", () => {
        riff.style.visibility = riffCheckbox.checked ? 'visible' : 'hidden';
    });
})
fg