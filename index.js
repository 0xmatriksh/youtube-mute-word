function logic() {
    var all = document.querySelectorAll("#video-title")

    // add your words here
    var words = ["omegle", "chess"]

    console.log("TOTAL FETCHED", all.length)

    for (var post of all) {
        for (var word of words) {
            var isTrue = post.textContent.includes(word.replace(/(^\w|\s\w)/g, m => m.toUpperCase())) || post.textContent.includes(word.toUpperCase()) || post.textContent.includes(word.toUpperCase())
            if (isTrue) {
                post.parentNode.parentNode.parentNode.parentNode.parentNode.setHTML(`<div 
                style="padding: 20px;
                height: 200px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;">

                <h1>Removed - Video Title Contains Muted Word</h1>

                </div>`)
                break
            }
        }

    }
}

setTimeout(logic, 5000)



