import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        {/* Sort by: Priority, Category,  */}
            <h2 className='header-text header-lt'
            >Sort By:   &#x1F52C; 
            </h2>        
            <h2 className='header-text header-md' >
            My Tasks
            </h2>
        {/*View by Day, 3 Day, Week  */}
            <h2 className="header-text header-rt" >
            Calendar:   &#x1F4C5;
            </h2>
      </div>
    )
  }
}

export default Header
