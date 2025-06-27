setTimeout(() => {
  throw new Error("OPPS");
}, 1000);

Promise.reject("Promise Failed");

process.on("uncaughtException", error => {
  console.log("🚀 ~ process.on uncaughtException ~ error:", error);
  process.exit(1); // Recommended to restart app
});

process.on("unhandledRejection", error => {
  console.log("🚀 ~ process.on unhandledRejection ~ error:", error);
  process.exit(1); // Recommended to restart app
});
