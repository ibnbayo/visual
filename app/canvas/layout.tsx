'use client'

import { Layout, Typography } from 'antd'

import styles from './styles.module.css'

const { Title } = Typography

const { Header, Content } = Layout

interface Props {
  children: React.ReactNode
}

export default function CanvasLayout({ children }: Props) {
  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={5}>THE Data Visualization</Title>
      </Header>

      <Content className={styles.content}>{children}</Content>
    </Layout>
  )
}
