var add = require('../DemoOne/add.js');
var expect = require('chai').expect;

describe('加法测试', function() {
	it('结果为两参数之和', function() {
		expect(add(1, 1)).to.be.equal(2);
	});
});
