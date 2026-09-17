function $(id){
    return document.getElementById(id)
}

function rangeRGB(){
    const r = $("red-range").value
    const g = $("green-range").value
    const b = $("blue-range").value
    const a = $("alpha-range").value

    $("red-value").value = r
    $("green-value").value = g
    $("blue-value").value = b
    $("alpha-value").value = a

    
    

    $("rgb-box").style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`
}

function valueRGB(){
    const r = $("red-value").value
    const g = $("green-value").value
    const b = $("blue-value").value
    const a = $("alpha-value").value

    $("red-range").value = r
    $("green-range").value = g
    $("blue-range").value = b
    $("alpha-range").value = a

    $("rgb-box").style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`
}

function resize(){
    const w = $("width-range").value
    const h = $("height-range").value
    const ml = $("margin-left-range").value
    const mp = $("margin-top-range").value
    const br = $("border-radius-range").value
    const f = $("rotate-range").value

    $("rgb-box").style.width = `${w}px`
    $("rgb-box").style.height = `${h}px`
    $("rgb-box").style.marginLeft = `${ml}px`
    $("rgb-box").style.marginTop = `${mp}px`
    $("rgb-box").style.borderRadius = `${br}px`
    $("rgb-box").style.rotate= `${f}deg`

}



$("red-range").addEventListener("input", rangeRGB) //ha raknek zarojelet a rangeRGB utan akkor lefutna alapbol betoltesnel az oldal
$("green-range").addEventListener("input", rangeRGB)
$("blue-range").addEventListener("input", rangeRGB)
$("alpha-range").addEventListener("input", rangeRGB)

$("red-value").addEventListener("input", valueRGB)
$("green-value").addEventListener("input", valueRGB)
$("blue-value").addEventListener("input", valueRGB)
$("alpha-value").addEventListener("input", valueRGB)

$("width-range").addEventListener("input", resize)
$("height-range").addEventListener("input", resize)
$("margin-left-range").addEventListener("input", resize)
$("margin-top-range").addEventListener("input", resize)
$("border-radius-range").addEventListener("input", resize)
$("rotate-range").addEventListener("input", resize)