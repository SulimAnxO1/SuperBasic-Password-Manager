str = `<tr>
<td>${website}</td>
<td>${website}</td>
<td>${website}</td>
</tr>`;

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    json.push({ username: username.value, password: password.value });
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({ username: username.value, password: password.value });
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});
