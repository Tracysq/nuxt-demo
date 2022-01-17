export default ({ $axios }) => {
	$axios.onRequest(request => {
		console.log(`[${request.method}] ${request.url}`);
	});

	$axios.onResponse(response => {
		console.log(`[${response.status}] ...`);
	});

	$axios.onError(err => {
		console.log(`axios error ${err}`);
		console.log(`[${err.response && err.response.status}] ${err.response && err.response.request.path}`);
		console.log(err.response && err.response.data);
	})
}
