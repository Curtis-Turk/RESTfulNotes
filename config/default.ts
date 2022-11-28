export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/RESTfulNotes",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey:
    "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqDSVYYrSwSyF5yoG+5WZkOotY\nNuJuMsrOnzGugFJ+A+Pxv2SYN0/eqN45q9UbveT9x8pf7aoj+/oQpKUxRvKebhR4\nAgcI4/GVlM3gdiBufl51kkuZOyntLWdg3UiKNnB7STjZsDF5RddLdqQhf5XODY/F\n/K/OHkznUQOeZLhmRQIDAQAB\n-----END PUBLIC KEY-----",
  privateKey: "",
};
