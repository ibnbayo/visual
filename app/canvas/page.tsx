'use client'

import { Col, Row } from 'antd'

import Card from '../components/card/card'

import CanvasLayout from './layout'
import ChartLoader from '../components/chartLoader/chartLoader'

export interface CanvasPageProps {
  data: any[]
}

const CanvasPage : React.FC<CanvasPageProps>  = (
  props: CanvasPageProps,
) => {
  const { data } = props

  return (
    <CanvasLayout>
      <Row
        gutter={[16, 12]}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        {data.map((item) => {
          return (
            <Col xs={24} lg={12} key={item.year} data-testid='col'>
              <Card title={`Academic Papers - ${item.year}`}>
                <ChartLoader
                  data={item.data}
                  chartId={`chart-${item.year}`}
                  columnXname="institutionName"
                  columnYname="papers"
                />
              </Card>
            </Col>
          )
        })}
      </Row>
    </CanvasLayout>
  )
}

export default CanvasPage
