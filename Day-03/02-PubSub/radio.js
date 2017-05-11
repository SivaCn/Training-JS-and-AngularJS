var radio = (function(){
	function Radio(evtName){
		this.__subscribers = [];
	}
	Radio.prototype.subscribe = function(){
		var subscriptions = arguments,
			self = this;
		Array.prototype.forEach.call(subscriptions, function(subscription){
			if (typeof subscription === 'function' || Array.isArray(subscription))
				self.__subscribers.push(subscription);
		});
		return this;
	};
	Radio.prototype.broadcast = function(){
		var args = arguments;
		this.__subscribers.forEach(function(subscription){
			if (typeof subscription === 'function'){
				subscription.apply(this, args)
			}
			if (Array.isArray(subscription)){
				var callback = subscription[0],
					context = subscription[1];
				callback.apply(context, args);
			}
		});
		return this;
	};
	Radio.prototype.unsubscribe = function() {
		var subscriptions = arguments,
			self = this;
		Array.prototype.forEach.call(subscriptions, function(subscription){
			self.__subscribers = self.__subscribers.filter(function(subscriptionInList){
				if (Array.isArray(subscriptionInList))
					subscriptionInList = subscriptionInList[0];
				return subscriptionInList !== subscription;
			});
		});
		return this;
	};

	var radios = {};
	
	return function(evtName){
		radios[evtName] = radios[evtName] || new Radio(evtName);
		return radios[evtName];
	}

})()