export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const active = "data-outside";

  function removeVisible(event) {
    if (!element.contains(event.target)) {
      callback();
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, removeVisible);
      });
      element.removeAttribute(active);
    }
  }

  if (!element.hasAttribute(active)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, removeVisible);
      });
    });
    element.setAttribute(active, "");
  }
}
