self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  const options = {
    body: data.body || "Neuer Forex Alert",
    icon: "/icon.png",
    badge: "/icon.png"
  };

  event.waitUntil(
    self.registration.showNotification("Forex Alerts", options)
  );
});


