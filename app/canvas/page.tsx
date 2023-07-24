'use client';

import { Col, Row } from 'antd';


import Card from '../components/card/card';
import CanvasLayout from './layout';


const CanvasPage: React.FC= () => {
  

  return (
    <CanvasLayout>

      <Row gutter={[16, 12]} style={{ width: '100%', maxWidth: '1200px' }}>

   

        <Col xs={24} lg={12} >

          <Card title={'life'} >
            
          </Card>

        </Col>   
        
   
      </Row>
    </CanvasLayout>
  );
};

export default CanvasPage;
