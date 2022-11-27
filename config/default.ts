export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/RESTfulNotes",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey:
    "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaxTsNf0/+K4Hsic5mqcrrEPP7\nn6RLGwxBOcFftg+r1nCM9DP3xE2IzesxPBsjeAZBxsUoJYJLj3vijVXisp7x/2Ai\nan2XpbEzAxDZEG4d1MUWTMNUVo/I17mbTYlnIlDP/6mAkGs3YDFK2AO1kfxfyzxK\n1LtLHOk+OqNmyDxCQwIDAQAB\n-----END PUBLIC KEY-----",
  privateKey: "",
};
