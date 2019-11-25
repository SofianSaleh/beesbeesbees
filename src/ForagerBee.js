var ForagerBee = function() {
	Bee.call(this)
	this.job           = 'find pollen';
	this.color         = 'yellow' ;
	this.treasureChest = []
};
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function( treasure ) {
	this.treasureChest.push(treasure)
}