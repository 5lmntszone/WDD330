export default class Alert {
  constructor(url) {
    this.url = url;
  }

  async init() {
    const alerts = await this.loadAlerts();
    if (alerts && alerts.length > 0) {
      this.buildAlerts(alerts);
    }
  }

  async loadAlerts() {
    try {
      const response = await fetch(this.url);
      if (response.ok) {
        return await response.json();
      } else {
        console.error("Failed to load alerts");
        return [];
      }
    } catch (err) {
      console.error("Error fetching alerts:", err);
      return [];
    }
  }

  buildAlerts(alerts) {
    const alertSection = document.createElement("section");
    alertSection.classList.add("alert-list");

    alerts.forEach(alert => {
      const p = document.createElement("p");
      p.textContent = alert.message;
      p.style.background = alert.background;
      p.style.color = alert.color;
      alertSection.appendChild(p);
    });

    document.querySelector("main").prepend(alertSection);
  }
}
