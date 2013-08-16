describe('PhoneCat App', function() {
 
  describe('Phone list view', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });
 
 
    it('should filter the phone list as user types into the search box', function () {
        

      expect(repeater('.phones li').count()).toBe(3);
 
      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
 
      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
        

    });
      


    it('should display the current filter value within an element with id "status"',
      function () {
          

          expect(element('#status').text()).toMatch(/Current filter: \s*$/);

          input('query').enter('nexus');

          expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);

          //alternative version of the last assertion that tests just the value of the binding
          using('#status').expect(binding('query')).toBe('nexus');
          

      });





    it('should be possible to control phone order via the drop down select box',
      function () {
          

          //let's narrow the dataset to make the test assertions shorter
          input('query').enter('tablet');

          expect(repeater('.phones li', 'Phone List').column('phone.name')).
              toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                       "MOTOROLA XOOM\u2122"]);

          select('orderProp').option('Alphabetical');

          expect(repeater('.phones li', 'Phone List').column('phone.name')).
              toEqual(["MOTOROLA XOOM\u2122",
                       "Motorola XOOM\u2122 with Wi-Fi"]);
          

      });
      
      /*
      Add a pause() statement inside of an end-to-end test and rerun it. 
      You'll see the runner pause; this gives you the opportunity to explore the state of your application while it is displayed in the browser. 
      The app is live! You can change the search query to prove it. Notice how useful this is for troubleshooting end-to-end tests.
      */


  });
});

/*

Even though the syntax of this test looks very much like our controller unit test written with Jasmine, 
the end-to-end test uses APIs of Angular's end-to-end test runner.
*end-to-end test runner: http://docs.angularjs.org/guide/dev_guide.e2e-testing

To run the end-to-end test, open one of the following in a new browser tab:

node.js users: http://localhost:8000/test/e2e/runner.html
users with other http servers: http://localhost:[port-number]/[context-path]/test/e2e/runner.html
casual reader: http://angular.github.com/angular-phonecat/step-3/test/e2e/runner.html
Previously we've seen how Karma can be used to execute unit tests. Well, it can also run the end-to-end tests! 
Use ./scripts/e2e-test.sh script for that. End-to-end tests are slow, so unlike with unit tests, Karma will exit after the test run and 
will not automatically rerun the test suite on every file change. To rerun the test suite, execute the e2e-test.sh script again.

This test verifies that the search box and the repeater are correctly wired together. Notice how easy it is to write end-to-end tests in Angular. 
Although this example is for a simple test, it really is that easy to set up any functional, readable, end-to-end test.

*/