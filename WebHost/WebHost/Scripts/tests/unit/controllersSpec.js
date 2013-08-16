describe('PhoneCat controllers', function () {

    describe('PhoneListCtrl', function () {

        it('should create "phones" model with 3 phones', function () {
            var scope = {},
                ctrl = new PhoneListCtrl(scope);

            expect(scope.phones.length).toBe(3);
        });
    });
});

/*
Angular developers prefer the syntax of Jasmine's Behavior-driven Development (BDD) framework when writing tests. 
Although Angular does not require you to use Jasmine, we wrote all of the tests in this tutorial in Jasmine. 
You can learn about Jasmine on the Jasmine home page and on the Jasmine wiki.


The angular-seed project is pre-configured to run all unit tests using Karma. To run the test, do the following:

In a separate terminal window or tab, go to the angular-phonecat directory and run ./scripts/test.sh to start the Karma server (the config file necessary to start the server is located at ./config/karma.conf.js).

Karma will start a new instance of Chrome browser automatically. Just ignore it and let it run in the background. Karma will use this browser for test execution.

You should see the following or similar output in the terminal:

      info: Karma server started at http://localhost:9876/
      info (launcher): Starting  browser "Chrome"
      info (Chrome 22.0): Connected on socket id tPUm9DXcLHtZTKbAEO-n
      Chrome 22.0: Executed 1 of 1 SUCCESS (0.093 secs / 0.004 secs)
Yay! The test passed! Or not...

To rerun the tests, just change any of the source or test files. Karma will notice the change and will rerun the tests for you. Now isn't that sweet?
*/