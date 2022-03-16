AFRAME.registerComponent('rotate', {
	
	init: function() {
		let el = this.el;
		this.rotateHorizontal = function() {
			
			el.setAttribute('animation', "property: rotation; to: -90 360 0; easing: linear; dur:5000; loop:true");
		}
		this.el.addEventListener('click', this.rotateHorizontal);
	 },
	
	remove: function() {
		this.el.removeEventListener('click', this.rotateHorizontal);
	}
})