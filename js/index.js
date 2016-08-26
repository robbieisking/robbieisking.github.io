class IndexBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []}  // 여기에 list들이 들어갈거임
  }
  componentDidMount () {
    $.ajax ( {
      url:this.props.url,
      dataType:'json',
      cache:false,
      success: (data) => {
        this.setState({data})
      },
      error:(xhr,status,err) => {
        console.log(this.props.url,status,err.toString())
      }
    })
  }
  render () {
    return (
      <div className='indexBox'>
        <IndexList data={this.state.data} />
      </div>
     )
  }

}


class IndexList extends React.Component {

  render () {
    let indexes = this.props.data.map( (index) => {
      return (
        <div className='indexes' className='col-sm-6'> {/*bootstrap grid: 총 12구역, 6은 반절 쓰겠다는거.*/}
          <h3 > {index.title} </h3>
          <Index contents={index.contents}/>
        </div>
      )
    })
    return (
    <div className='indexList'>
      {indexes}
    </div>
    ) 
  }


}

class Index extends React.Component {
  render () {
    let contents = this.props.contents.map ( (content) => {
      if(content.suppliment)
       return (
        <li className='list-group-item'><a href={content.href} target={content.target}> {content.subtitle} </a></li> 
       ) 
      else
        return (
          <li className='list-group-item'><a href={content.href} target={content.target}> {content.subtitle} </a></li> 
         )
      
    })
    return (
      <div className='Index'>
        <ul className='list-group'>
        {contents} 
        </ul>
      </div>
    )
  }
}

ReactDOM.render ( <IndexBox url='list.json' />, document.getElementById('contents'))
