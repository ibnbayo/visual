import React from 'react';

import { Row, Card as AntdCard, Space } from 'antd';

export interface CardProps {
  children?: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, title } = props;

  return (
    <AntdCard
      
      title={title}
      bordered={false}
      actions={[
        <Row
          key='comments'
          justify='space-between'
          align='middle'
          
        >
          
        </Row>,
      ]}
    >
     
    </AntdCard>
  );
};

export default Card;
