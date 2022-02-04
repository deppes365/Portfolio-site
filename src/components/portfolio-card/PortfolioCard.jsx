import "./portfoliocard.scss";


function PortfolioCard({ title, image, list, tech, liveLink, codeLink}) {
  return (
  <div className="portfolio-card">
      <div className="img-wrapper">
          <img src={image} alt="" />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <h3 className='tech'>{tech.join(', ')}</h3>
        <ul className="bullet-points">
            {list.map(item => {
                return <li>{item}</li>
            })}
        </ul>
      </div>
      <div className="buttons">
        <a className='live-link' href={liveLink} target='_blank'>Live Demo</a>
        <a className='code-link' href={codeLink} target='_blank'>View Code</a>
      </div>
  </div>
  );
}

export default PortfolioCard;
