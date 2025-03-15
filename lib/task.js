export default {
	parallel: async (array, done) => {
		return await Promise.all(array.map(done));
	},
	queue: async (array, done) => {
		return await array.reduce(async (promise, item) => {
			await promise;
			await done(item);
		}, Promise.resolve());
	},
}
