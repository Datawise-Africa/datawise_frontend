

const EducationStatistics = ({ data }) => {
  if (!data.length) return <p>Data loading...</p>

  const totalPrograms = data.length;

  const craftPrograms = data.filter(item => item.programme_category.credential === 'CRAFT');
  const diplomaPrograms = data.filter(item => item.programme_category.credential === 'DIPLOMA');
  const degreePrograms = data.filter(item => item.programme_category.credential === 'DEGREE');

  const totalCraftPrograms = craftPrograms.length;
  const totalDiplomaPrograms = diplomaPrograms.length;
  const totalDegreePrograms = degreePrograms.length;

  const institutions = [...new Set(data.map(item => item.institution_name))].length;

  const calculateStats = (programs) => {
    const totalCost = programs.reduce((sum, item) => sum + parseFloat(item.program_cost), 0);
    const averageCost = (totalCost / programs.length).toFixed(2);
    const costs = programs.map(item => parseFloat(item.program_cost));
    const minCost = Math.min(...costs);
    const maxCost = Math.max(...costs);
    const medianCost = costs.sort((a, b) => a - b)[Math.floor(programs.length / 2)];
    return { totalCost, averageCost, minCost, maxCost, medianCost };
  }

  const {
    totalCost: totalCraftCost,
    averageCost: averageCraftCost,
    minCost: minCraftCost,
    maxCost: maxCraftCost,
    medianCost: medianCraftCost
  } = calculateStats(craftPrograms);

  const {
    totalCost: totalDiplomaCost,
    averageCost: averageDiplomaCost,
    minCost: minDiplomaCost,
    maxCost: maxDiplomaCost,
    medianCost: medianDiplomaCost
  } = calculateStats(diplomaPrograms);

  const {
    totalCost: totalDegreeCost,
    averageCost: averageDegreeCost,
    minCost: minDegreeCost,
    maxCost: maxDegreeCost,
    medianCost: medianDegreeCost
  } = calculateStats(degreePrograms);

  const statistics = [
    { label: 'Total Programs', value: totalPrograms },
    { label: 'Total Craft Programs', value: totalCraftPrograms },
    { label: 'Average Craft Program Cost', value: averageCraftCost },
    { label: 'Min Craft Program Cost', value: minCraftCost },
    { label: 'Max Craft Program Cost', value: maxCraftCost },
    { label: 'Median Craft Program Cost', value: medianCraftCost },
    { label: 'Total Diploma Programs', value: totalDiplomaPrograms },
    { label: 'Average Diploma Program Cost', value: averageDiplomaCost },
    { label: 'Min Diploma Program Cost', value: minDiplomaCost },
    { label: 'Max Diploma Program Cost', value: maxDiplomaCost },
    { label: 'Median Diploma Program Cost', value: medianDiplomaCost },
    { label: 'Total Degree Programs', value: totalDegreePrograms },
    { label: 'Average Degree Program Cost', value: averageDegreeCost },
    { label: 'Min Degree Program Cost', value: minDegreeCost },
    { label: 'Max Degree Program Cost', value: maxDegreeCost },
    { label: 'Median Degree Program Cost', value: medianDegreeCost },
    { label: 'Total Institutions', value: institutions }
  ];

  return (
    <div className="lg:ml-10 lg:mt-20 p-6 shadow-md rounded-lg mb-6">
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-n-15">Higher Education Statistics</h2>
        {statistics.map((stat, index) => (
          <p key={index} className="text-lg">
            <span className="font-semibold">{stat.label}: </span>
            <span className="text-n-16">{stat.value}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default EducationStatistics