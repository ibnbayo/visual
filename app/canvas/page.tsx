'use client';

import { Col, Row } from 'antd';


import Card from '../components/card/card';
import CanvasLayout from './layout';
import ChartLoader from '../components/chartLoader/chartLoader';



const CanvasPage: React.FC= () => {
  

  return (
    <CanvasLayout>

      <Row gutter={[16, 12]} style={{ width: '100%', maxWidth: '1200px' }}>

   

        <Col xs={24} lg={12} >

          <Card title={'life'} >
            <ChartLoader
              // data={datay && datay.length && datay[0]}
              data={[{ "uni": "MIT", "students": 73992 },
  { "uni": "Brown", "students": 61603 },
  { "uni": "INSEAD", "students": 18455 },
  { "uni": "Oxford", "students": 32891 },
  { "uni": "LSE", "students": 11273 }]}

              chartId='chart1'
              columnXname='uni'
              columnYname='students'
            />
            
          </Card>

        </Col>   
        
   
      </Row>
    </CanvasLayout>
  );
};

export default CanvasPage;
