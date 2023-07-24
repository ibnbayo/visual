'use client'
import { useState, useEffect } from 'react'
import institutionsData from '../example-data/institutions.json'
import submissionsData from '../example-data/submissions.json'
import CanvasPage from './canvas/page'

export default function Home() {


  
  const submissions = submissionsData
  const institutions = institutionsData

  const yearsArray = Array.from(
    new Set(submissions.map((sub) => sub.year)),
  )

  // Array for joined data
  const yearlyData: any[] = []

  // Loop through each year
  yearsArray.forEach((year) => {
    // Filter submissions by year
    const yearSubmissions = submissions.filter(
      (sub) => sub.year === year,
    )

    // Loop through institutions
    institutions.forEach((institution) => {
      // Filter submissions for this institution
      const institutionSubmissions = yearSubmissions.filter(
        (sub) => sub.institution_id === institution.id,
      )

      // Sum paper count
      const paperCount = institutionSubmissions.reduce(
        (total, curr) => {
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

  // Map years to grouped data
  uniqueYears.map((year) => {
    // Filter data by year
    const yearData = yearlyData.filter((d) => d.year === year)

    // Create object with year and data
    const groupedYear = {
      year,
      data: yearData,
    }

    // Add to array
    groupedData.push(groupedYear)
  })

  console.log(groupedData)
  const passedData = groupedData

  return (
    <main data-testid="main">
      
      <CanvasPage data={groupedData} />
    </main>
  )
}
