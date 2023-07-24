'use client';

import { Col, Row } from 'antd';


import Card from '../components/card/card';
import CanvasLayout from './layout';
import ChartLoader from '../components/chartLoader/chartLoader';

export interface CanvasPageProps {
  data: any[];
}

const CanvasPage: React.FC<CanvasPageProps>= (props: CanvasPageProps) => {
  const { data } = props;
//   console.log(data[1]);

  return (
    <CanvasLayout>

      <Row gutter={[16, 12]} style={{ width: '100%', maxWidth: '1200px' }}>

   

        <Col xs={24} lg={12} >

          <Card title={'life'} >
            <ChartLoader
              data={data}

              chartId='chart1'
              columnXname='institutionName'
              columnYname='papers'
            />
            
          </Card>

        </Col>   
        
   
      </Row>
    </CanvasLayout>
  );
};

export default CanvasPage;
