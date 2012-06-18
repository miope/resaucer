REPORTER = spec

test: 
	./node_modules/mocha/bin/mocha -R $(REPORTER)

test-and-watch:
	./node_modules/mocha/bin/mocha -w -R $(REPORTER)

.PHONY: test
