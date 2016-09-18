import React from 'react'
import TabPanel, { TabStrip } from 'react-tab-panel'
import 'react-tab-panel/index.css'

export default () => {
  return <TabPanel onActivate={(index) => console.log('Tab ' + index + ' was activated!')}>

    <div tabTitle="First tab">
      Lorem ipsum Veniam aliquip esse ex nulla anim aliquip et in
      dolore consectetur dolor aliqua dolor consectetur fugiat in Excepteur voluptate.
    </div>

    <div tabTitle="Second tab">
      Lorem ipsum Sunt nisi sint.
    </div>
  </TabPanel>
}