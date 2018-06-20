import React, { Component } from 'react'

export class Tabs extends Component {

  state = {
    activeIndex: 0
  }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderTabs(){
    const {data} = this.props
    return data.map((tab, index) => {
      const isActive = this.state.activeIndex === index
      return (
        <div
          key={index}
          className={isActive ? 'tab active' : 'tab'}
          onClick={IO => this.selectTabIndex(index)}
          >{tab.label}</div>
      )
    })
  }

  renderPanel(){
    const { data } = this.props
    const { activeIndex } = this.state
    return <div>{data[activeIndex].content}</div>  
  }
  
  render() {
    const tabs = (
      < div className = "tabs" > {
          this.renderTabs()
        } 
      </div>
    )

    const panel = (
        <div className="panels">
          {this.renderPanel()}
        </div>
    )

    return (
      <div className="Tabs">
        {tabs}
        {panel}
      </div>
    )
  }
}

export default Tabs
