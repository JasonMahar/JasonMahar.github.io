AFRAME.registerComponent('move-vertical', {
	
	init: function() {
		let el = this.el;
		this.moveVertical = function() {
			
			el.setAttribute('animation', "property: position; from: 0 0 -15;  to: 0 40 -15; easing: easeInOutCubic; dur:8000");
		}
		this.el.addEventListener('click', this.moveVertical);
	 },
	
	remove: function() {
		this.el.removeEventListener('click', this.moveVertical);
	}
})