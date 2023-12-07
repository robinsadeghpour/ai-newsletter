const logger = {
  log: (message: string, payload?: Record<string, unknown>) => {
    console.log(message, JSON.stringify(payload));
  },
  info: (message: string, payload?: Record<string, unknown>) => {
    console.log(message, JSON.stringify(payload));
  },
  error: (message: string, payload?: unknown) => {
    console.error(message, JSON.stringify(payload));
  },
};

export { logger };
