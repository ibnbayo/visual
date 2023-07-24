import React from 'react'
import styles from './card.module.css';
import { Row, Card as AntdCard } from 'antd'

export interface CardProps {
  children?: React.ReactNode
  title: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, title } = props

  return (
    <AntdCard
    // className={styles.card}
      title={title}
      bordered={false}
      actions={[
        <Row
          key="comments"
          justify="space-between"
          align="middle"
        ></Row>,
      ]}
    >
      <div className={styles.chart}>{children}</div>
    </AntdCard>
  )
}

export default Card
