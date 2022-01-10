import pwaManifest, { write } from "@pwa/manifest";

(async () => {
  const manifest = await pwaManifest({
    name: "My PWApp",
    short_name: "My Short PWA Name",
    start_url: "/index.html?homescreen=1",
    display: "standalone",
    background_color: "#EFEFEF",
    theme_color: "#FFEEFF",
  });
  // dump new generated manifest file if you want
  await write("./", manifest);
})();
