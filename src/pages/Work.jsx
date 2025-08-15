import PageHeader from "../components/block/PageHeader";
import WorkItem from "../components/work/WorkItem";
import workData from "../data/workData";

const Work = () => {
  return (
    <main className='siteContent workPage'>
      <section className="workSec">
        <PageHeader
            title='Work'
            subtitle='My Works'
          />
        <div className="workSec__inner">
          <ul className="workSec__list">
            {
              workData.map((item, index) => (
                <WorkItem
                  key={index}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                  image={item.image}
                  url={item.url}
                />
              ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Work;