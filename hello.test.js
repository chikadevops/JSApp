const sayHello = require('./hello');

describe('sayHello', () => {
    let consoleSpy;

    beforeAll(() => {
        // Spy on console.log before any test runs
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterAll(() => {
        // Restore the original console.log after all tests finish
        consoleSpy.mockRestore();
    });

    it('logs the expected message to the console', () => {
        sayHello(); // Call the function
        expect(consoleSpy).toHaveBeenCalledWith('Hello from GitHub Actions!');
    });

    // Optional: Test to ensure server doesn't start in the test environment
    it('does not log "Server is running on port 3000"', () => {
        expect(consoleSpy).not.toHaveBeenCalledWith('Server is running on port 3000');
    });
});
