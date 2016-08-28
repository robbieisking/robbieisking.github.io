var trial=0
var btn = d3.select('button')
function stroll_around() {
    trial+=1
    if (trial>4)
        btn
            .style('background-color','red')
            .text('그만햌ㅋㅋㅋ')
    if (trial % 20 == 0){
        btn.text('미친놈일세;;;')
        d3.select('section#forfun').append('p').attr('class','stroll').text('그만!!!')
    }
    if (trial> 50)
        btn.text('이제 이스터애그 없어. 수업이나 들어.')
    if (trial > 500)
        btn.text('솔직히 이거 본 놈은, 코드를 뜯어봤거나 제대로 돌았다...')


    d3.selectAll('p.stroll')
        .style('position','absolute')
        .each(
            function(d,i){
                d3.select(this).transition().duration(500)
                    .style('top',Math.random()*400 + 'px')
                    .style('left',Math.random()*400 + 'px')
                    .style('font-size',Math.random()*20 + 20 + 'px')
                    .style('color',`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`)
            }

        )
}



window.stroll_around = stroll_around
