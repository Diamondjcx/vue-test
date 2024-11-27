<template>
  <div></div>
</template>

<script setup>
import CryptoJS from "crypto-js";
// 使用 AES 加密密码并存储
function encryptPassword(password, secretKey) {
  // 加密密码
  const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();

  // 将加密后的密码存储到 localStorage
  localStorage.setItem("encryptedPassword", encrypted);
  console.log("Encrypted Password:", encrypted);
}

// 示例：加密并存储密码
const password = "mySuperSecretPassword";
const secretKey = "mySecretKey123"; // 密钥，用于加解密
encryptPassword(password, secretKey);

// 解密并恢复原始密码
function decryptPassword(secretKey) {
  // 从 localStorage 获取加密后的密码
  const encryptedPassword = localStorage.getItem("encryptedPassword");

  if (!encryptedPassword) {
    console.log("No encrypted password found!");
    return;
  }

  // 解密密码
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

  console.log("Decrypted Password:", decryptedPassword);
  return decryptedPassword;
}

// 示例：解密并恢复密码
const recoveredPassword = decryptPassword(secretKey);
console.log("Recovered Password:", recoveredPassword);
</script>

<style lang="scss" scoped>
</style>