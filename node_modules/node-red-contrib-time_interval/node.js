module.exports = function(RED) {
    function time_interval_node(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var previous_time_ms = 0; //> modul global variable
        //> dso declaration:
        node.on('input', function(msg) {
      //> implement:
	     var d = new Date();
		 var time_difference_ms = 0;
         var current_time_ms = 0; 
		 
		 current_time_ms = d.getMilliseconds() + 1000 * (d.getSeconds() + d.getMinutes() * 60 + d.getHours() * 3600);//> time [ms]
		 
		 if (previous_time_ms > 0){
		    time_difference_ms = current_time_ms - previous_time_ms;
		 }
		 msg.payload = time_difference_ms;
		 
		 previous_time_ms = current_time_ms;

          node.send(msg);
        });
    }
    RED.nodes.registerType("time_interval",time_interval_node);
}
