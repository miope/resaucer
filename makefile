REPORTER = spec

test: 
	./node_modules/mocha/bin/mocha -R $(REPORTER)

.PHONY: test
