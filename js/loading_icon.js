/*
copyright:Matthew Woelk
source: http://bl.ocks.org/Mattwoelk/6132258

Woelk! i bet you would not even open this content, but if you feel uncomfortable with using this code, 
please email me:robbieinertia@gmail.com
then i'll reply asap. thanks for sharing this stunning idea!

ps. but it only works at v3.5.17 ... no compatible with any other version.
especially, d3.svg.arc()
*/
function loader(config) {
  return function() {
    var radius = Math.min(config.width, config.height) / 2;
    var tau = 2 * Math.PI;

    var arc = d3.svg.arc()
            .innerRadius(radius*0.5)
            .outerRadius(radius*0.9)
            .startAngle(0);

    var svg = d3.select(config.container).append("svg")
        .attr("id", config.id)
        .attr("width", config.width)
        .attr("height", config.height)
      .append("g")
        .attr("transform", "translate(" + config.width / 2 + "," + config.height / 2 + ")")
        

    var background = svg.append("path")
            .datum({endAngle: 0.33*tau})
            .style("fill", "#4D4D4D")
            .attr("d", arc)
            .call(spin, 1500)

    function spin(selection, duration) {
        selection.transition()
            .ease("linear")
            .duration(duration)
            .attrTween("transform", function() {
                return d3.interpolateString("rotate(0)", "rotate(360)");
            });

        setTimeout(function() { spin(selection, duration); }, duration);
    }

    function transitionFunction(path) {
        path.transition()
            .duration(7500)
            .attrTween("stroke-dasharray", tweenDash)
            .each("end", function() { d3.select(this).call(transition); });
    }

  };
}

window.loader = loader
/* example case */
//var myLoader = loader({width: 960, height: 500, container: "#loader_container", id: "loader"});
//myLoader();