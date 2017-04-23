if (!(window.location.host.startsWith("127.0.0.1") || window.location.host.startsWith("localhost")) && (window.location.protocol != "https:")) {
  window.location.protocol = "https";
  document.location = "https:" + window.location.href.substring(window.location.protocol.length, window.location.href.length);
}
