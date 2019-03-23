const axios = require('axios');

module.exports = function(pluginContext) {
	const baseUrl = 'http://' + pluginContext.host + ':' + pluginContext.port;

	return {
		respondsTo: (query) => {
			return true;
		},
		search: async (query, env = {}) => {
			var res = await axios.default.get(baseUrl, {
				params: {
					search: query,
					json: 1,
					path_column: 1
				}
			});
			
			var items = res.data.results;
			return items.map(i => ({
				//icon: 'fa-calculator',
				title: i.name,
				subtitle: i.path,
				value: i.name + '//' + i.path,
			}))
		}
	}
}