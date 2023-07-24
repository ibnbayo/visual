
import CanvasPage from './canvas/page'

export default async function Home() {

  interface Institution{
  name: string;
  address: string;
  country: string;
  region: string;
  id: string;
}

  interface Submission{
   id: string;
    institution_id: string;
    year: number;
    students_total: number;
    undergraduates_total: number;
    postgraduates_total: number;
    staff_total: number;
    academic_papers: number;
    institution_income: number;
    subjects: any[]
}

  let institutions: Institution[]
  let submissions: Submission[]

  const instUrl = 'http://localhost:3001/institutions';
  const response = await fetch(instUrl);
  institutions =  await response.json();

  const subUrl = 'http://localhost:3001/submissions';
  const res = await fetch(subUrl);
  submissions =  await res.json();


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
      <CanvasPage data={groupedData} />
    </main>
  )
}
