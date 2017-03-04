/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
//Jasmine functions:
// "describe" method used as a container for test methods related to a discrete section
// of functionality.  No special functionality other than its string parameter being
// bound to an HTML element
// "it" accepts a string(spec title) and a function(the spec or test)
// and computes a boolean value for each of any number of "expect" statements,
// an assertions in the form of a 2-part method invocation taking an actual
// value(expect()) and a matcher value(toBe() is just one of many available
// matcher functions)
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
                expect(allFeeds[i].url).not.toBe('');
            }
        });


        // loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.
        it('has defined and nonempty name values', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        //declare a constant(as opposed to a variable) which cannot be reassigned
        const relevantClasses = document.body.classList;

         //testing default state of DOM menu visibility
        it('should be hidden on load/by default', function() {
            expect(relevantClasses).toContain('menu-hidden');
        });

     //ensure the menu changes visibility-state when clicked
        it('should become visible when first clicked', function() {
            var menuIcon = $(".menu-icon-link");

            menuIcon.trigger("click");

            expect(relevantClasses).not.toContain('menu-hidden');

            menuIcon.trigger("click");

        });

        it('should become hidden when clicked again', function() {
            var menuIcon = $(".menu-icon-link");

            menuIcon.trigger("click");
            menuIcon.trigger("click");

            expect(relevantClasses).toContain('menu-hidden');
        });
    });

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    describe('Initial Entries Container', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        //tests only that html is not empty, not that it in fact contains an entry
        it('should contain at least 1 entry', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    // TODO: Write a new test suite named "New Feed Selection"
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    describe('New Feed Selection', function() {
        var container = $('.feed');
        var testArray = [];

        beforeEach(function(done) {

            loadFeed(0, function() {
                var feed1Text = container[0].innerText;
                testArray.push(feed1Text);
            loadFeed(1, done);
            });
        });

        it('should change the content', function(done) {
            var feed2Text = container[0].innerText;
            testArray.push(feed2Text);
            //compares the visible text of container before and after the second feed load
            console.log(testArray);
            expect(testArray[0]).not.toBe(testArray[1]);
            done();
        });
    });
}());