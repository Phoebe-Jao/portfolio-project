const WorkItem = ({ title, date, category, image, url }) => {
  const formattedDate = date.replace(/-/g, ".");

  return (
    <li className="workSec__listItem">
      <a href={`${url === '' ? '#' : ''}`} className="workSec__listItemWrap">
        <div className="workSec__listItemImgWrap">
          <figure>
            <img src={`/images/work/${image}`} alt={title} />
          </figure>
        </div>
        <div className="workSec__listItemMeta">
          <span className="workSec__listItemCateg">{category}
          </span>
          <time datetime="2025" className="workSec__listItemTime">{formattedDate}</time>
        </div>
        <p className="workSec__listItemTtl">{title}</p>
        </a>
    </li>
  )
}

export default WorkItem;