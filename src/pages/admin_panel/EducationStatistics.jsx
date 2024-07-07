

const EducationStatistics = ({ data }) => {

  if (!data.length) return <p>Data loading...</p>

  const totalPrograms = data.length;

  const craftPrograms = data.filter(item => item.programme_category.credential === 'CRAFT');
  const diplomaPrograms = data.filter(item => item.programme_category.credential === 'diploma');
  const degreePrograms = data.filter(item => item.programme_category.credential === 'degree');
  // const data_name = data.map(item => item.name);

  const totalCraftPrograms = craftPrograms.length;
  const totalDiplomaPrograms = diplomaPrograms.length;
  const totalDegreePrograms = degreePrograms.length;

  const institutions = [... new Set(data.map(item => item.institution_name))].length;
  const totalCost = data.reduce((sum, item) => sum + parseFloat(item.program_cost), 0);
  const averageCost = (totalCost / totalPrograms).toFixed(2);
  const costs = data.map(item => parseFloat(item.program_cost));
  const minCost = Math.min(...costs);
  const maxCost = Math.max(...costs);
  const medianCost = costs.sort((a,b) => a-b)[Math.floor(totalPrograms / 2)];

  return (
    <div className="lg:ml-10 lg:mt-20 p-6 shadow-md rounded-lg mb-6">
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-n-15">Higher Education Statisitcs</h2>
        {/* <p>{data_name}</p> */}
        <p className="text-lg"><span className="font-semibold">Total Programs: {totalPrograms}</span></p>
        <p className="text-lg"><span className="font-semibold">Total Craft Programs: {totalCraftPrograms}</span></p>
        <p className="text-lg"><span className="font-semibold">Total Diploma Programs: {totalDiplomaPrograms}</span></p>
        <p className="text-lg"><span className="font-semibold">Total Degree Programs: {totalDegreePrograms}</span></p>
        <p className="text-lg"><span className="font-semibold">Total Institutions: {institutions}</span></p>
        <p className="text-lg"><span className="font-semibold">Average Program Cost: {averageCost}</span></p>
        <p className="text-lg"><span className="font-semibold">Min Program Cost: {minCost}</span></p>
        <p className="text-lg"><span className="font-semibold">Max Program Cost: {maxCost}</span></p>
        <p className="text-lg"><span className="font-semibold">Median Program Cost: {medianCost}</span></p>
      </div>
    </div>
  )
}

export default EducationStatistics