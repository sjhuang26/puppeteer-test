const ActionModule = require('../action-module');

module.exports = new ActionModule({
	'blog': require('./blog')
});
