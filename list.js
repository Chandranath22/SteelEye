//Refactoring the component

import React from 'react'

class List extends React.Component {
  constructor (props) {
    super(props);                               //Use of super() for passing props to the parent constructor
    this.state = { items: props.items }
  }

  shouldComponentUpdate (nextProps) {
    // console.log(nextProps.items !== this.props.items);
    return nextProps.items !== this.props.items
  }

  handleClick (index) {
    this.props.onClick(index)
  }

  renderElement (item, index) {
    return <li onClick={() => this.handleClick(index)} key={index}>{item.text}</li>    //defining key attribute for each li element
  }

  render () {
    return (
      <ul style={{ backgroundColor: 'red', height: 'auto' }}>
        {/*using this.props.item instead of this.state.item*/}
        {this.props.items.map((item, i) => this.renderElement(item, i))}  
      </ul>
    )
  }
}

export default List