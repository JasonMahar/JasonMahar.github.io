AFRAME.registerComponent('target-marker', {
	init: function() {
		let el = this.el;
		this.addingMarker = function(e) {
			let p = e.detail.intersection.point;
			let scene = document.querySelector('a-scene');
			let newEl = document.createElement('a-entity');
			newEl.setAttribute('geometry', {
			primitive: 'sphere'
		});
		newEl.setAttribute('material', 'color: yellow');
		newEl.setAttribute('scale', '.2 .2 .2');
		newEl.setAttribute('position', p);
		scene.appendChild(newEl);
	}
	this.el.addEventListener('click', this.addingMarker)
	},
	remove: function() {
	this.el.removeEventListener('click', this.addingMarker);
	}
});
