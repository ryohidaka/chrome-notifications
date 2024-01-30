global.chrome = {
  notifications: {
    create: jest.fn(),
    update: jest.fn(),
    clear: jest.fn(),
    getAll: jest.fn().mockImplementation(() => Promise.resolve()),
    getPermissionLevel: jest.fn().mockImplementation(() => Promise.resolve()),
  },
};
