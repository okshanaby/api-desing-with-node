setTimeout(() => {
  throw new Error("OPPS");
}, 1000);

Promise.reject("Promise Failed");


process.on("uncaughtException", error => {
  console.log("🚀 ~ process.on uncaughtException ~ error:", error);
});

process.on("unhandledRejection", error => {
  console.log("🚀 ~ process.on unhandledRejection ~ error:", error);
});
