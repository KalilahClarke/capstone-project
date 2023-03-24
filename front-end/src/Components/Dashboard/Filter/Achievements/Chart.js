import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'


function Chart({data}) {

  let year = new Date()?.getFullYear() || '2023'

  
  data = data[0]?.filter((object)=>object.day?.includes(year))
  
  return (
    <div style={{'height': '30vh'}}>
     
     <ResponsiveCalendar
        data={data}
        from={`${year}-02-01`}
        to={`${year}-12-30`}
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderWidth={0}
        monthBorderColor="#ffffff"
        monthLegendOffset={9}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
/>
    </div>
  )
}

export default Chart