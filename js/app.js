const marvel ={
	render:() => {
		const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fa3fb5d5c4c1fc8df54ca7b07f840ba8&hash=d40afdab9ff8f5fc5d4fb3756b0ec388';
		const container = document.querySelector('#marvel-row');
		let contentHTML = '';

		fetch(urlAPI)
			.then(res =>res.json())
			.then((json) => {
				for (const hero of json.data.results){
					let urlHero = hero.urls[0].url;
					contentHTML += `
						
							<div class="col-md-4">
								
									<a href="${urlHero}" target="_blank">
										<img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
										class="img-thumbnail">
									</a>
									<h3 class="title">${hero.name}</h3>
								
							</div>
						
					`;
				}
				container.innerHTML = contentHTML;
			})
	}
};
marvel.render();