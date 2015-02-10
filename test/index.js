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
		(err instanceof AppError).should.be.true;
		err.message.should.equal('Application error');
		done();
	}
});

it('should identify extended errors as a BaseError instance', function(done) {
	var ExtendedError = errorBuilder.create('ExtendedError', -2, 'Extended error', AppError);
	var AnotherError = errorBuilder.create('AnotherError', -3, 'Another error', AppError);

	try {
		throw new ExtendedError();
	} catch(err) {
		(err instanceof Error).should.be.true;
		(err instanceof AppError).should.be.true;
		(err instanceof ExtendedError).should.be.true;
		(err instanceof AnotherError).should.be.false;
		err.message.should.equal('Extended error');
		done();
	}
});
