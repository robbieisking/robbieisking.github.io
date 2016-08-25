 //로비 돌아다니는거, 엌ㅋㅋㅋ잼땈ㅋㅋㅋ
function myTransf () {
  d3.select('#robbie').transition().duration(500)
  .style('top', Math.random()*800 + 'px')
  .style('left', Math.random()*800 + 'px')

}

var rob_inside = d3.select('body')
                    .append('div')
                    .attr('width','800px')
                    .attr('height','800px')
var rob = rob_inside
    .append('img')
    .attr('id','robbie')
    .attr('src','static/rob.png')
    .style('top', Math.random()*200 + 'px')
    .style('left', Math.random()*200 + 'px')

setInterval(myTransf,1000)

var robClick=0

$('img#robbie').on('click', function() {
  robClick+=1

  $(this).append($('h1'))
  $(this).children().text('왜 날 ' + robClick + '번 클릭함ㅋㅋ?') 
})