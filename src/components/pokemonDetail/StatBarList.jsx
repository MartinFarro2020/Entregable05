import BarProgresStat from "./BarProgresStat"

const StatBarList = ({stats}) => {
  return (
    <section>
        <h2 className="flex text-xl font-semibold mb-2 pl-5 mt-4">Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgresStat key={stat.name} stat={stat}/>)
            }
        </section>
    </section>
  )
}
export default StatBarList