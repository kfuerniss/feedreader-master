/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test will loop through each feed and will make sure it has a URL defined and that the URL is not empty.*/
        it('test for URL in array', function() {
            
            allFeeds.forEach(function (arrayURL){
                var itemURL = arrayURL.url
                expect(itemURL).not.toBeUndefined();
                expect(itemURL.length).not.toBe(0);
            });
        });


        /* Test will loop through each feed and ensures it has a name defined
         * and that the name is not empty.
         */
        it('test for name to make sure it is not empty', function() {

            allFeeds.forEach(function (arrayName){
                var itemName = arrayName.name
                expect(itemName).not.toBeUndefined();
                expect(itemName.length).not.toBe(0);
            });
        });

    });


    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* Test will ensures the menu element is
         * hidden by default. 
        */
        it('make sure menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

         /* Test will ensures the menu changes
          * visibility when the menu icon is clicked. 
         */
        it('test that the menu changes', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });
    /* Test suite named "Initial Entries" */
    describe('initial Entries', function() {
        /* Test will ensures when the loadFeed
         * function is called and completes it works properly.
        */
        beforeEach (function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('loadFeed has completed', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Test will ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        var test1;
        var test2;

        beforeEach (function(done) {
            loadFeed(0, function() {
                test1 = $('.feed').html();
                loadFeed(1, function() {
                    test2 = $('.feed').html();
                    done();
                });
            });
        });

        it('New feed is loaded', function(done) {
            expect(test2).not.toMatch(test1);
            done();
        });
    });    
}());
