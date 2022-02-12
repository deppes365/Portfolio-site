import React, {useEffect} from 'react';
import './portfolio.scss';
import PortfolioCard from '../../components/portfolio-card/PortfolioCard';
import weatherAppImg from '../../assets/images/weatherAppImg.jpg';
import eppesEverAfter from '../../assets/images/eppeseverafter.jpg';
import portfolioImg from '../../assets/images/portfolio-pic.jpg';

function Portfolio() {

	useEffect(() => {
		setTimeout(()=> {
			document.querySelector('.portfolio .container').classList.add('show')
		}, 200)
	}, [])

	return (
		<div className="portfolio">
			<div className="container">
			<h1 className="page-title">
				<span>P</span>ortfolio
			</h1>
				<PortfolioCard
					title="My Portfolio Website"
					list={[
						'Uses React Router Dom for fast loading',
						"Utilizes Sass's mixins features",
						'Responsive Web Design',
						'Uses Email.js to contact me directly from the site',
					]}
					tech={['React.js', 'Sass', 'JavaScript', 'NPM', 'Git', 'GitHub']}
					image={portfolioImg}
					liveLink={'http://www.darreneppes.com/'}
					codeLink={'https://github.com/deppes365/portfolio-site'}
				/>
				<PortfolioCard
					title="Weather App"
					tech={['Html', 'Css', 'JavaScript', 'Git', 'GitHub']}
					list={[
						'Uses an API call to fetch data',
						'Displays fetched data to UI',
						'Built to display Vanilla Javscript Knowledge',
						'Array methods',
						'String methods',
						'Asychronous JavaScript',
						'Responsive Web Design',
					]}
					image={weatherAppImg}
					liveLink={'https://deppes365.github.io/Weather-App/'}
					codeLink={'https://github.com/deppes365/Weather-App'}
				/>
				<PortfolioCard
					title="EppesEverAfter Website"
					list={[
						"This is a real live site I built for my brother's wedding",
						'This is the first site I ever deployed to the internet',
						'The RSVP form stores the data in a google sheet file',
						'Please do not RSVP, they have a budget',
					]}
					tech={['Html', 'Css', 'JavaScript']}
					image={eppesEverAfter}
					liveLink={'https://eppeseverafter.com/'}
					codeLink={'https://github.com/deppes365/EppesEverAfter'}
				/>
			</div>
		</div>
	);
}

export default Portfolio;
