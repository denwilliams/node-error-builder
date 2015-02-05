var errorBuilder = require('../');
require('should');

var AppError = errorBuilder.create('AppError', -1, 'Application error');

it('should generate custom errors', function(done) {
	try {
		throw new AppError();
	} catch(err) {
		done();
	}
});

it('should have the error name set', function(done) {
	try {
		throw new AppError();
	} catch(err) {
		err.name.should.equal('AppError');
		done();
	}
});

it('should have the error code set', function(done) {
	try {
		throw new AppError();
	} catch(err) {
		err.code.should.equal(-1);
		done();
	}
});

it('should allow custom messages', function(done) {
	try {
		throw new AppError('Custom message');
	} catch(err) {
		err.message.should.equal('Custom message');
		done();
	}
});

it('should have a default message when none specified', function(done) {
	try {
		throw new AppError();
	} catch(err) {
		err.message.should.equal('Application error');
		done();
	}
});

it('should identify as an Error instance', function(done) {
	try {
		throw new AppError();
	} catch(err) {
		(err instanceof Error).should.be.true;
		err.message.should.equal('Application error');
		done();
	}
});
