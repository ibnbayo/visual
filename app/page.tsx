import axios from 'axios';
import CanvasPage from './canvas/page'
import SubjectsPage from './subjects/page';
import { Institution, Submission } from '../types'

export default async function Home() {


  const instUrl = 'http://localhost:3001/institutions';  
const subUrl = 'http://localhost:3001/submissions';


const getInstitutions = async() => {
  try {
    const response = await axios.get(instUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getSubmissions = async() => {
  try {
    const response = await axios.get(subUrl);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const institutions = await getInstitutions(); 
const submissions = await getSubmissions();


  const yearsArray = Array.from(
    new Set(submissions.map((sub: Submission) => sub.year)),
  )

  // Array for joined data
  const yearlyData: any[] = []


  yearsArray.forEach((year) => {

    const yearSubmissions = submissions.filter(
      (sub: Submission) => sub.year === year,
    )


    institutions.forEach((institution: Institution) => {
      // Filter submissions for this institution
      const institutionSubmissions = yearSubmissions.filter(
        (sub: Submission) => sub.institution_id === institution.id,
      )

      // Sum paper count
      const paperCount = institutionSubmissions.reduce(
        (total: number, curr: Submission) => {
          return total + curr.academic_papers
        },
        0,
      )

      const dataObj = {
        institutionName: institution.name,
        papers: paperCount,
        year: year,
      }

      yearlyData.push(dataObj)
    })
  })

  // Extract unique years
  const uniqueYears = [
    ...new Set(yearlyData.map((item) => item.year)),
  ]

  const groupedData: any[] = []
  
  uniqueYears.map((year) => {
    const yearData = yearlyData.filter((d) => d.year === year)
    const groupedYear = {
      year,
      data: yearData,
    }
    groupedData.push(groupedYear)
  })

  return (
    <main data-testid="main">
      <CanvasPage data-testid="canvas" data={groupedData} />
      <SubjectsPage 
    institutions={institutions}
    submissions={submissions} 
  />
    </main>
  )
}
