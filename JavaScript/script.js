function copyText(txt) {
  navigator.clipboard.writeText(txt).catch(() => {
    console.warn("Clipboard copying failed");
  });
}

const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e) => {
    return e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
  showPasswords();
};

const showPasswords = () => {
  let table = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null || JSON.parse(data).length == 0) {
    table.innerHTML = "No Data To Show";
  } else {
    table.innerHTML = `
        <tr>
          <th>Website Url</th>
          <th>Username</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>`;
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str += `<tr>
<td>${element.website} <img onclick="copyText('${element.website}')" src="/Image/copy.svg" alt="Copy Button"></td>
<td>${element.username} <img onclick="copyText('${element.username}')" src="/Image/copy.svg" alt="Copy Button"></td>
<td>${element.password} <img onclick="copyText('${element.password}')" src="/Image/copy.svg" alt="Copy Button"></td>
<td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
</tr>`;
    }
    table.innerHTML = table.innerHTML + str;
  }
  website.value = "";
  username.value = "";
  password.value = "";
};

showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});
