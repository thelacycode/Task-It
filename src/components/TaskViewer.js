import React, { Component } from 'react';
import "../style/css/TaskViewer.css";
import Tabs from './Tabs'
import FaBolt from 'reat-icons/lib/fa/bolt'

export class TaskViewer extends Component {


  render() {
      const tabData = [
        { 
            label: <FaBolt />,
            content: text.high
        },
        {
            label: < FaBolt / > ,
            content: text.medium
        },
        {
            label: < FaBolt / > ,
            content: text.low
        }    
      ]
      
    return (
      <div className="TaskViewer">
        <Tabs data={tabData} />
        <header className='viewer-header'>
        {/* Sort by: Priority, Category,  */}
            <h2 className='header-text header-lt'>Sort By:   &#x1F52C; </h2>        
            < h2 className='header-text header-md' > My Tasks </h2>
               {/*View by Day, 3 Day, Week  */}
            <h2 className="header-text header-rt" > Calendar:   &#x1F4C5; </h2>
               
        </header>
      </div>
    )
  }
}

export default TaskViewer
