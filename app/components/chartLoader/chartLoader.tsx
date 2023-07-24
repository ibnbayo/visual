import React, { useEffect } from 'react'

interface ChartLoaderProps {
  data: any[]
  chartId: string
  columnXname: string
  columnYname: string
  chartCoordinate?: string
  year?: number
}

const ChartLoader: React.FC<ChartLoaderProps> = ({
  data,
  chartId,
  columnXname,
  columnYname,
  chartCoordinate,
}) => {
  useEffect(() => {
    import('@antv/g2').then(({ Chart }) => {
      const chart = new Chart({
        container: chartId,
        autoFit: true,
        height: 500,
      })

      chart.data(data)

      chart.scale(columnYname, {
        nice: true,
      })

      if (chartCoordinate === 'theta') {
        chart.coordinate('theta', {
          radius: 0.75,
        })
      }

      chart
        .interval()
        .position(`${columnXname}*${columnYname}`)
        .color(columnXname)

      chart.render()
    })
  }, [data, chartId, columnYname, chartCoordinate, columnXname])

  return <div id={chartId} />
}

export default ChartLoader
