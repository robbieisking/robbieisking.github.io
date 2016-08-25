/*
    rob strolling 구조화하기
    1. react componant화
    2. d3.js <-> data binding 방식으로. data만 바뀌도록.
    
    
    react화
        robbie 이미지가 돌아다닐 canvas
        (캔버스의 위치, 크기 조절 가능.)
        
        실제로 돌아다니는 이미지.
        (몇초마다 돌아다니는지 설정 가능.)

*/

class Robbie extends React.Component {
    constructor(props){
        super(props)
        this.state={coord:{top:'1px',left:'1px'}}
    }
    play() {
        let data = 
            [{top:Math.random()*800 + 'px',
            left:Math.random()*800 + 'px'}]
        
        d3.select('img#rob')
            .data(data)
            .transition().duration(500)
            .style('top', d => { return d.top})
            .style('left', d => {return d.left})
    }
    
    render () {
        let width = this.props.size.width
        let height = this.props.size.height
        setInterval(this.play,3000)
        return (
            <div className='robbie'>
                < img id='rob'src='/static/rob.png' style={{width:width , height:height}} />
            </div>
        )
        
    }
}

class RobbiePlayground extends React.Component {
    
    constructor(props) {
        super(props)
        this.state={ size:{width:'10rem',height:'10rem'}}
    }
    render () {
       
        return ( 
             <div className='robbie_playground'>
                < Robbie size={this.state.size}/>
            </div>
        )
                
    }
    
}

    
ReactDOM.render( <RobbiePlayground />, document.getElementById('robbie_playground'))