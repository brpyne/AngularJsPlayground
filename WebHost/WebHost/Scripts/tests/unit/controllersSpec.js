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
*/