import Card from './components/card/card';



export default function Home() {
  return (
    <main data-testid="main" className="mx-auto max-w-2xl">
      <h1
        data-testid="header"
        className="font-montserrat mt-10 text-2xl font-bold leading-normal text-black md:ml-[149px]"
      >
        App
      </h1>
      <Card title={`Chart`}/>
      
    </main>
  )
}
