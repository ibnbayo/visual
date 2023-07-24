
require('jest-worker');

jest.mock('worker_threads', () => ({
  Worker: function MockWorker() {}  
}));

// Other mocks...

Object.defineProperty(window, 'URL', {
  writable: true,
  value: {
    createObjectURL: jest.fn(),
  },
});

window.URL.createObjectURL.mockImplementation(() => {
  return 'data:image/png;base64,mockImage'; 
});