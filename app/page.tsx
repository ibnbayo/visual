
import institutionsData from '../example-data/institutions.json'; 
import submissionsData from '../example-data/submissions.json';
import CanvasPage from './canvas/page'

export default function Home() {

  const submissions = submissionsData; 
const institutions = institutionsData;

  return (
    <main data-testid="main" className="mx-auto max-w-2xl">
      <h1
        data-testid="header"
        className="font-montserrat mt-10 text-2xl font-bold leading-normal text-black md:ml-[149px]"
      >
        App
      </h1>
      <CanvasPage data={submissions}/>
      
      
    </main>
  )
}
