AFRAME.registerComponent('color-toggle', {
	
	init: function() {
		let el = this.el;
		this.toggleColor = function() {
			
			randomColor = Math.floor(Math.random()*16777215).toString(16);
			el.setAttribute('color', "#" + randomColor);
		}
		this.el.addEventListener('click', this.toggleColor);
	 },
	
	remove: function() {
		this.el.removeEventListener('click', this.toggleColor);
	}
})