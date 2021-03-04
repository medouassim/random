
var tags = document.getElementById('choices')
var input = document.querySelector('.container input');
input.focus()
var inputList;
input.addEventListener('keyup', e => {
     {
        if(e.key === "Enter") {
            setTimeout(() => {
                e.target.value =""
            }, 10)

            randomSelect();
            
        }
        inputList = input.value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
        tags.innerHTML ='';
        inputList.forEach(inp => {
            var v = document.createElement('span');
            v.innerHTML = inp;
            v.classList.add('choice');
            tags.appendChild(v);  
                      
        });
    }
})
function randomSelect() {
    var intervale = setInterval(() => {
          var randomTag = pickRandomTag();
          highlightTag(randomTag);
          setTimeout(() => {
              unhighlightTag(randomTag)
          }, 150);
    }, 150);
    setTimeout(() => {
        clearInterval(intervale);

        setTimeout(() => {
            var randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 150);
    }, 20 * 150);
}
function pickRandomTag() {
    var spans = document.querySelectorAll('.choice');
    return spans[Math.floor(Math.random() * spans.length)]
}
function highlightTag(tag) {
    tag.classList.add('highlight');
}
function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}