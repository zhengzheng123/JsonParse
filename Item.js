class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  render(){
    const {
      data,
      name,
      isLast,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <div className="box">

        <span
          className={`toggle ${isOpen? 'close' : 'open'}`}
          onClick={() => this.setState({isOpen:!isOpen})}
        />

        {name ? <b>{name} : </b> : ''}

        {Array.isArray(data) ? '[' : '{'}

        {isOpen ? '' : '...'}

        <ul style={{display: isOpen ? 'block' : 'none'}}>
          {
            Object.keys(data).map((k, i, arr) => (
              (typeof data[k] === 'object' && data[k] !== null) ? (
                <Item
                  key={k}
                  data={data[k]}
                  name={Array.isArray(data)?'': k}
                  isLast={i === arr.length - 1}
                />
              ) : (
                <li key={k}>
                  <b>{Array.isArray(data) ? '' : `${k} : `}</b>
                  {`“ ${data[k]} ”`} ，
                </li>
              )
            ))
          }
        </ul>

        {Array.isArray(data) ? ']' : '}'}
        {isLast ? '' : '，'}

      </div>
    )
  }
}