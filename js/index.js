class IndexBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []} 
  }
  componentDidMount () {
    $.ajax ( {
      url:this.props.url,
      dataType:'json',
      cache:false,
      success: (data) => {
        console.log('ajaxed')
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
        <div className='indexes' className='col-sm-6'>
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
     return (
      <li ><a href={content.href} target={content.target}> {content.subtitle} </a></li> 
     ) 
      
    })
    return (
      <div className='Index'>
        <ul>
        {contents} 
        </ul>
      </div>
    )
  }
}

ReactDOM.render ( <IndexBox url='list.json' />, document.getElementById('contents'))
