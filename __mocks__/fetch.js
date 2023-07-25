// __mocks__/fetch.js

export default jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ success: true }) 
}));