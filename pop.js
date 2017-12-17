class Pop{
	constructor(el){
		this.el = el;
		this.el.classList.add('pop');
		this.div = document.querySelector('.js-app');
		this.el.innerHTML = `
							<span class = "popup">Click on me</span>
							`;
		this.div.append(this.el);

		this.el.addEventListener('click', function(event){
			let target = event.currentTarget;
			//console.log(target);
			target.style.transform = 'translateX(-1000px)';
			target.style.transitionDuration = '2s';
		});
	}
}