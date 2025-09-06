const currentyear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const lastmodified = document.lastModified;
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;
