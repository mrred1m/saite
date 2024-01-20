export const config = {
    HOST: "212.233.99.182",
    USER: "postgres",
    PASSWORD: "root",
    DB: "kyril",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export const dialect = "postgres";