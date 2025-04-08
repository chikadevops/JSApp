const sayHello = require('./hello');

describe('sayHello', () => {
    it('logs the expected message to the console', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        sayHello();

        expect(consoleSpy).toHaveBeenCalledWith('Hello from GitHub Actions!');

        consoleSpy.mockRestore();
    });
});