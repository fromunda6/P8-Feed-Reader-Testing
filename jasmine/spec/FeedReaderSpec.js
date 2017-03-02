/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

 /* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 //"describe" method used as a container for test methods related to a discrete section
 //of functionality

 // "it" accepts a string(spec title) and a function(the spec or test)
 // and computes a boolean value for each of any number of "expect" statements,
 // an assertions in the form of a 2-part method invocation taking an actual
 // value(expect()) and a matcher value(toBe() is just one example)

$(function() {
    describe('RSS Feeds', function() {


        it('data are defined and nonzero', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // loops through each feedin the allFeeds object and ensures it has a URL defined
        //  and that the URL is not empty.
        it('has defined and nonempty URL values', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
            }
        });


        // loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.
        it('has defined and nonempty name values', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden on load', function() {

            var htmlBody = $(document.body);
            var bodyClassName = htmlBody.attr('class');

            expect(bodyClassName).toBe('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should toggle visibility when clicked', function() {

         })
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.

        And possibly a Spy

         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
