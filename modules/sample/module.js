const consoleObjectKeys = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

export default function () {
  consoleObjectKeys(this);

  // this.extendRoutes((routes) => {
  //   routes.push({
  //     name: "items",
  //     path: "/",
  //     components: "~/modules/pages/items",
  //   });
  // });
}
