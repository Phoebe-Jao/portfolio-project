import PageHeader from "../components/block/PageHeader";

const Work = () => {
  return (
    <main className='siteContent workPage'>
      <section className="workSec">
        <PageHeader
            title='Work'
            subtitle='My Works'
          />
        <div className="workSec__inner">
        </div>
      </section>
    </main>
  )
}

export default Work;