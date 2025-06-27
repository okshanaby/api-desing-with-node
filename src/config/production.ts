process.env.NODE_ENV = "production";

const productionConfig = {
  port: 5001,
  secrets: {
    dbUrl: process.env.DATABASE_URL,
  },
};

export default productionConfig;
