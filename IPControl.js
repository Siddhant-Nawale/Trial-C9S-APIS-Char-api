var ipList = [
	'::21',
    '192.168.56.1'
]
// mode: 'allow','deny'
var options = {
	mode: 'deny',
	denys: [],
	allows: [],
	forceConnectionAddress: false,
	log: function(clientIp, access) {
		console.log(clientIp + (access ? ' accessed.' : ' denied.'));
	},
	statusCode: 401,
	redirectTo: '',
	message: 'Unauthorized'
};


module.exports= {
    ipList,options
}
