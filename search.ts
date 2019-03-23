import axios from 'axios'

export = function(pluginContext) {
	return {
		respondsTo: (query) => {
			return true;
		},
		search: async (query, env) => {
			const baseUrl = 'http://' + env.host + ':' + env.port;
			var res = await axios.get(baseUrl, {
				params: {
					search: query,
					json: 1,
					path_column: 1
				}
			});
			
			var items : any[] = res.data.results;
			if (!items)
				return [];
			return items.map(i => ({
				//icon: 'fa-calculator',
				title: i.name,
				subtitle: i.path,
				value: i.path + '//' + i.name,
			}))
		}
	}
}