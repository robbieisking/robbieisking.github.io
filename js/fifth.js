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

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaZCtp1SgvfEcYFkxPbpUmHhsXs61r5F4",
    authDomain: "seiyon-web-develope.firebaseapp.com",
    databaseURL: "https://seiyon-web-develope.firebaseio.com",
    storageBucket: "seiyon-web-develope.appspot.com",
  };
  firebase.initializeApp(config);

$('form').on('submit', function() {
    
    firebase.database().ref('/presentation/fifth/').push({
        id:$('input[name="id"]').val(),
        text:$('textarea[name="text"]').val()
    })
    $('input[name="id"]').val('')
    $('textarea[name="text"]').val('')
    return false
})
/*
firebase.database().ref('/presentation/fifth/').once('value',function(snap){
    var questions = []
    for (var key in snap.val())
        questions.push(snap.val()[key])
    questions.reverse()
    var playground = d3.select('div.questions')
    playground.selectAll('dl').data(questions).enter().append('dl')
        .html(function(d){ return '<dt>' +d.id + '</dt>'+ '<dd>' + d.text + '</dd>'})
        .exit().remove()

})
*/
firebase.database().ref('/presentation/fifth/').on('child_added', function(data){
    console.log(data.val())
    $('div.questions').prepend(`<dl><dt>${data.val().id}</dt><dd>${data.val().text}</dd></dl>`)
})

var isToggled=0
function toggleQuestion() {
    isToggled = isToggled == 0 ? 1 : 0
    if(isToggled){
        d3.select('div.questions').transition().duration(500)
            .style('height','1rem')
        $('button#toggle').text('질문란 펼치기')
    }
    else{
         d3.select('div.questions')
            .style('height','40rem')
         $('button#toggle').text('질문란 접기')

    }
}
