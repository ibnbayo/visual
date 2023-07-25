
import { Institution, Submission } from '../../types'

interface Props {
  institutions: Institution[];
  submissions: Submission[]; 
}

export default function SubjectsPage({institutions, submissions}: Props) {

const subjectsIndex: {[key: string]: string[]} = {};

submissions.forEach(submission => {

  // Get institution name
  const institutionName = institutions.find(i => i.id === submission.institution_id)!.name;

  // Add subjects
  submission.subjects.forEach(subject => {
    
    // Initialize if new subject
    if(!subjectsIndex[subject.name]) {
      subjectsIndex[subject.name] = [];
    }

    // Add institution name 
const set = new Set(subjectsIndex[subject.name]);
set.add(institutionName);
subjectsIndex[subject.name] = [...set];

  });

});

  const formattedData = Object.keys(subjectsIndex).map(subject => {
  return {
    subject,
    institutions: subjectsIndex[subject] 
  };
});


return (

<>
<div className="px-4 py-8">
<h1 className=' text-center pb-6 font-extrabold'>Subjects Data</h1>
<div className="flex justify-center">

  <table className="table-auto border-collapse bg-white rounded-lg shadow-lg">

    <thead>
      <tr className="bg-gray-50">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institutions</th>
      </tr>
    </thead>

    <tbody>

  {formattedData.map(item => (  
    <tr key={item.subject}>

      <td className="px-6 py-4 text-sm text-gray-500">
        {item.subject}
      </td>

      <td className="px-6 py-4 text-sm text-gray-500">
        <ul className="list-none flex flex-col gap-2">
          {item.institutions.map(inst => (
            <li key={inst}>{inst}</li>  
          ))}
        </ul>
      </td>

    </tr>
  ))}

</tbody>
      
  </table>

</div>
</div>
</>





);

}